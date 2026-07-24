import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const BaseApi = createApi({
    reducerPath:'api',
     baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000",

        prepareHeaders:(headers)=>{
            const token = window.localStorage.getItem("accessToken");
            if(token){
                headers.set("authorization",`bearer ${token}`);
            }
            return headers;
        }
     }),
    tagTypes:['post','user'],
    endpoints:()=>({})
})

export default BaseApi