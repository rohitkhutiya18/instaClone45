import { Bookmark, Heart, MessageCircle } from "lucide-react"

const PostAction = () => {
  const icon = "w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-zinc-500/40 active:scale-105 cursor-pointer "
  return (
    <>
    <div className="flex justify-between items-center px-3">
      <div className="flex items-center justify-center gap-2">
        <button className={icon}>
            <Heart className="h-5 w-5"/>
        </button>

           <button className={icon}>
            <MessageCircle className="h-5 w-5"/>
        </button>
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