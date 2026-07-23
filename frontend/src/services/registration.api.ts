import BaseApi  from "../api/BaseApi";

const registrationApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        registerUser : builder.mutation({
            query:(data:FormData)=>({
                method:"POST",
                url:'/user/create',
                body:data
            })
        })
    })
})


export const {useRegisterUserMutation} = registrationApi