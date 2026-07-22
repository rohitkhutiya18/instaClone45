import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import CreatePostForm from "../component/createPost/CreatePostForm";


const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const RegisterPage = lazy(()=>import('../pages/RegisterPage'))
const EmailAndOtp = lazy(()=>import( "../component/otpVerifiction/EmailAndOtp"))

export const router = createBrowserRouter([
     {
        path:"/home",
        element: <Home/>,
        children:[
         {path:'create-post',
            element:<CreatePostForm/>
         }
        ]
     },{
      path:'/register',
      element:<RegisterPage/>
     },
     {
      path:'/login',
      element:<Login/>
     },{
      path:'/email-verify',
      element:<EmailAndOtp/>
     }
])