import { createBrowserRouter } from "react-router-dom";
import EmailAndOtp from "../component/otpVerifiction/EmailAndOtp";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const router = createBrowserRouter([
     {
        path:"/home",
        element: <Home/>
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