import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetOTPMutation,
  useVerifyOTPMutation,
} from "../../services/otpVerificition";
import { useNavigate } from "react-router-dom";
import type { otpInterFace } from "../../types/OTP.infterface";

const EmailAndOtp = () => {
  const [requestOTP, { isLoading: isRequestOTP }] = useGetOTPMutation();
  const [verifyOTP, { isLoading: isVerifyOTP }] = useVerifyOTPMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<otpInterFace>();

  const [step, setStep] = useState<"email" | "otp">("email");

  const navigate = useNavigate();

  const onSubmit = async (data: otpInterFace) => {
    try {
      if (step === "email") {
        console.log('requestotp')
        await requestOTP(data.email).unwrap();
        setStep("otp");
        return;
      }

      await verifyOTP(data).unwrap();
      navigate("/register", { state: { email: data.email } });
    } catch (error) {
      console.log("error in the email and otp compoenet", error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
          disabled={step !== "email"}
        />

        {errors?.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        {step === "email" && (
          <button type="submit" disabled={step !== "email" || isRequestOTP}>
            {isRequestOTP ? "Generating..." : "Get OTP"}
          </button>
        )}

        {step === "otp" && (
          <div>
            <input
              type="number"
              {...register("otp", {
                required: true,
                minLength: {
                  value: 4,
                  message: "minimun length 4",
                },
                maxLength: {
                  value: 4,
                  message: "max length 4",
                },
              })}
              placeholder="Enter OTP"
              disabled={isVerifyOTP}
            />

            <button type="submit" disabled={isVerifyOTP}>
              {isVerifyOTP ? "verifying..." : "send"}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default EmailAndOtp;