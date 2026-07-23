import type { postInterface } from "../../types/Post.Interface"
import PostAction from "./PostAction"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import PostMedia from "./PostMedia"

interface postCardProp{
  postCardProp : postInterface
}

const PostCard = ({postCardProp}:postCardProp) => {
  


  return (
    <>
        <article className="w-full max-w-2xl mx-auto rounded-3xl border 
        border-white/10 backdrop-blur-2xl overflow-hidden shadow shadow-[0_8px_40px_rgba(0,0,0,0.25)]
           transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            <div className="p-5 space-y-1.5">
             <PostHeader/>
             <PostMedia postMediaProp = {postCardProp.post_images} />
             <PostAction/>
             <PostFooter/>
            </div>

        </article>
    </>
  )
}

export default PostCard