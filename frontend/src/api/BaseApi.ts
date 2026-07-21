import { createApi} from "@reduxjs/toolkit/query/react";
import { baseQueryReAuth } from "./baseQueryWrapper";


const BaseApi = createApi({
    reducerPath:'api',
    baseQuery:baseQueryReAuth,
    tagTypes:[],
    endpoints:()=>({})
})

export default BaseApi