import type { postFooterInterface } from "../../types/Post.Interface";

interface postFooterPropInterface {
  postFooterProp : postFooterInterface
}
const PostFooter = ({postFooterProp}:postFooterPropInterface) => {
  
  const handleDate = (date:string)=>{
       const now  = Date.now()
       const created = new Date(date).getTime();

       const diff = Math.floor((now - created)/1000);
       
        if(diff < 60) return `${diff}s ago`
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;

  return new Date(date).toLocaleDateString();
  }


  return (
    <div className="space-y-3">

      {/* Likes */}
      {/* <p className="font-semibold text-white">
        1,284 likes
      </p> */}


      {/* Caption */}
      <div className="text-sm leading-relaxed">
        {/* <span className="font-semibold text-white">
          rohit_
        </span> */}

        <span className="ml-2 text-zinc-600">
          {postFooterProp.caption}
        </span>
      </div>


      {/* Comments */}
      <button
        className="
          text-sm
          text-zinc-400
          transition
          hover:text-white
        "
      >
        View all 23 comments
      </button>


      {/* Time */}
      <p className="text-xs text-zinc-500">
        {handleDate(postFooterProp.createdAt)}
      </p>

    </div>
  );
};

export default PostFooter;