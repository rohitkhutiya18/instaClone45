import { useForm } from "react-hook-form"
import type { loginForm } from "../types/LoginForm.Interface"
import { useLoginRequestMutation } from "../services/login.api"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setAccessToken } from "../store/slices/userSlice"

const Login = () => {
    
  const [loginRequest,{isLoading:isLogining}] = useLoginRequestMutation()
  const navigate = useNavigate()
  const dipatch = useDispatch()
    const {register,handleSubmit,formState:{errors}} = useForm<loginForm>()
    const onSubmit = async(data:loginForm)=>{
       try {
        const result = await loginRequest({data}).unwrap()
        console.log(result)
         
        if(result.data){

        dipatch(setAccessToken(result.data.accessToken))
      }

        navigate('/home');
       } catch (error) {
        console.log('error in login page',error)
       }
    }
  return (
    <>
      <p>login page</p>

      <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">email</label>
            <input id="email" disabled={isLogining} type="text" {...register('email',{
              required:true,
            })} />
            {errors.email && <p>{errors.email.message}</p>}

              <label htmlFor="email">password</label>
            <input id="password" disabled={isLogining} type="password" {...register('password',{
              required:true,
            })} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" disabled={isLogining}>{isLogining ? "loging..." : "Login"}</button>
      </form>

    </>
  )
}

export default Login