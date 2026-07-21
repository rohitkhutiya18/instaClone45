import BaseApi  from "../api/BaseApi";

const loginApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        loginRequest : builder.mutation({
            query:({data})=>({
                url:"/auth/login",
                method:"POST",
                body:{data}

            })
        })
    })
})


export const {useLoginRequestMutation} = loginApi