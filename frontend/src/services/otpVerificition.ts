import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const  OtpVerificationApi = createApi({
    reducerPath:'/otp',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/api',
        credentials:'include'
    }),
    tagTypes:['Otp'],
    endpoints:(builder)=>({
        getOTP : builder.mutation({
            query:(email:string)=>({
                method:"POST",
                url:"/auth/send-otp",
                body:{email}
            })
        }),
         verifyOTP :builder.mutation({
                query:({email,otp}:{email:string,otp:string})=>({
                    method:'POST',
                    url:"/auth/verify-otp",
                    body:{email,otp:parseInt(otp)}
                })
            })
    })

})


export const {
  useGetOTPMutation,
  useVerifyOTPMutation,
} = OtpVerificationApi;