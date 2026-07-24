import BaseApi from "../api/BaseApi";

const likeApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        likePost:builder.mutation({
            query:(postId)=>({
                url:"/like",
                method:"POST",
                body:postId
            }),
            invalidatesTags:['post']
        })
    })
})

export const {useLikePostMutation} = likeApi