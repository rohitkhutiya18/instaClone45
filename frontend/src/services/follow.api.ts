import BaseApi from "../api/BaseApi";

const followApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        followUserRequest : builder.mutation({
            query:(id)=>({
                url:"/follow/follow-user",
                method:"POST",
                body:id,
                
            }),
            invalidatesTags:['post']
        }),
        unFollowUserRequest : builder.mutation({
            query:(id)=>({
                url:'/follow/unfollow-user',
                method:"POST",
                body:id
            }),
            invalidatesTags:['post']
        })
    })
})

export const {useFollowUserRequestMutation,useUnFollowUserRequestMutation} = followApi