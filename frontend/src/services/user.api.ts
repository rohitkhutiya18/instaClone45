import BaseApi from "../api/BaseApi";

const userApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPostOfUser:builder.query({
            query:()=>({
                url:"/post/user-all-post-of-user",
                method:"GET"
            }),
            providesTags:['user']
        })
    })
})

export const {useGetPostOfUserQuery} = userApi