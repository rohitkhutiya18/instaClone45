import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import type { registerFormInterface } from "../types/RegiterForm.interface"
import { useRegisterUserMutation } from "../services/registration.api"

const RegisterPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [registerUserRequest,{isLoading:registeringUser}] = useRegisterUserMutation()

    const {register,handleSubmit,formState:{errors}} = useForm<registerFormInterface>({defaultValues:{
        email:location.state?.email || ""
    }})

    const onSubmit = async(data:registerFormInterface)=>{
       try {
        console.log(data)
        const response = await registerUserRequest({data}).unwrap()
        console.log(response)
         navigate('/login')
       } catch (error) {
        console.log('error in the regiter from',error)
       }
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>

         <label htmlFor="">userName :</label>
         <input type="text" {...register('userName',{
            required:true,
            maxLength:{
                value:20,
                message:"max length of userName is 20"
            },
              minLength:{
                value:3,
                message:"min length of userName is 3"
            }
         })} />
         {errors.userName && <p>{errors.userName?.message}</p>}
         

         <label htmlFor="">email :</label>
         <input type="text" disabled {...register('email',{
            required:true
         })} />
         {errors.email && <p>{errors.email?.message}</p>}

            <label htmlFor="">bio :</label>
         <input type="text" {...register('bio',{
            required:true,
            maxLength:{
                value:50,
                message:"max length of bio is 50"
            },
              minLength:{
                value:5,
                message:"min length of bio is 5"
            }
         })} />
         {errors.bio && <p>{errors.bio?.message}</p>}

            <label htmlFor="">password :</label>
         <input type="text" {...register('password',{
            required:true,
            maxLength:{
                value:6,
                message:"max length of password is 6"
            },
              minLength:{
                value:4,
                message:"min length of password is 4"
            }
         })} />
         {errors.password && <p>{errors.password?.message}</p>}


          <button type="submit" disabled={registeringUser}>{registeringUser ? 'registering...' :'Register'}</button>

        </form>
    </>
  )
}

export default RegisterPage