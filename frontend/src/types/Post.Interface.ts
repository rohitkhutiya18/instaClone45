export interface postImageInterface{
    url:string;
    publicId:string
}

export interface postHeaderInterface  {
        user_id:string
        user_userName:string
        // create_At:string  
        isFollowing:boolean
        }

export interface  postActionInterface  {
        likes:string
        comments:string 
        postId:string
       isLiked:boolean
      }        

export interface postFooterInterface{
        caption:string,
        createdAt:string;

}      

export interface postInterface{
postComment: string
post_caption: string;
post_createdAt: string;
post_id: string;
post_images: postImageInterface[];
postlike: string;
user_email: string;
user_id: string;
user_userName :string
isFollowing:boolean
isLiked:boolean

}