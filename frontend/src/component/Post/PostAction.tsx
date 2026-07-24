import { Bookmark, Heart, MessageCircle } from "lucide-react"
import type { postActionInterface } from "../../types/Post.Interface"
import { useLikePostMutation } from "../../services/like.api"

interface postActionPropInterface{
  postActionProp : postActionInterface
}

const PostAction = ({postActionProp}:postActionPropInterface) => {
  const icon = "w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-zinc-500/40 active:scale-105 cursor-pointer "
  const [requestLikePost] = useLikePostMutation()

  const handleLike = async (postId:string)=>{
    try {
      const res = await requestLikePost({postId}).unwrap();
      console.log(res)
    } catch (error) {
      console.log("error in PostAction component",error)
    }
  }
  
  return (
    <>
    <div className="flex justify-between items-center px-3">
      <div className="flex items-center justify-center gap-2">
       
        <div className="flex items-center">
         <button className={icon} onClick={()=>{handleLike(postActionProp.postId)}}>
            <Heart className={`h-5 w-5 ${postActionProp.isLiked ? 'text-red-700':""}`}/>
        </button>

        <label className="text-sm text-rose-600">{postActionProp.likes}</label>
        </div>
       

           
        <div className="flex items-center">
 <button className={icon}>
            <MessageCircle className="h-5 w-5"/>
        </button>

        <label className="text-sm text-rose-600">{postActionProp.comments}</label>
        </div>
      </div>

<div className="flex items-center justify-center gap-2">
        <button className={icon}>
            <Bookmark className="h-5 w-5"/>
        </button>
      </div>
      
    </div>
    </>
  )
  
}

export default PostAction