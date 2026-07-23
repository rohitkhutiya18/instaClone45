import BaseApi from "../api/BaseApi";

export const createPostApi = BaseApi.injectEndpoints({
    endpoints:(builders)=>({
        createPost : builders.mutation({
            query:(formData)=>({
                url:"/post/create",
                method:"POST",
                body:formData
            }),
        }),
        fetchPostOnHome:builders.query({
            query:()=>({
                url:"/post/scroll",
                method:'GET'
            })
        })
    })
})


export const {useCreatePostMutation,useFetchPostOnHomeQuery} = createPostApi