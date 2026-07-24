import { toast } from "react-toastify";
import { useFollowUserRequestMutation, useUnFollowUserRequestMutation } from "../../services/follow.api";
import type { postHeaderInterface } from "../../types/Post.Interface"

interface postHeaderPropInterface {
    postHeaderProp : postHeaderInterface
}

const PostHeader = ({postHeaderProp}:postHeaderPropInterface) => {
   const [requestFollowUser] = useFollowUserRequestMutation();
  const [requestUnFollowUser] = useUnFollowUserRequestMutation();
  const handleFollowUser = async (id:string)=>{
      try {

        const result = await requestFollowUser({id}).unwrap();
        console.log(result);
      } catch (error) {
        console.log(error)
        // toast(error.data.message.message)
      }
  }

  const handleUnFollowUser = async(id:string)=>{
     try {
       const result = await requestUnFollowUser({id}).unwrap();
       console.log(result)
     } catch (error) {
      console.log(error)
     }
  }

    return (
    <header className="flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src="https://assets.leonardo.ai/aaIFJMFoBIGEg8Xf_image2065418511.png?auto=compress,format&q=80&fit=max&w=2560"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>

        <div>
          <h3 className="text-zinc-700 font-semibold">
            {postHeaderProp.user_userName}
          </h3>

          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>
              @{postHeaderProp.user_userName?.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <button
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
        ${
          postHeaderProp.isFollowing
            ? "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            : "bg-black text-white hover:bg-zinc-800"
        }`}
        onClick={()=>{
          if(postHeaderProp.isFollowing === false){handleFollowUser(postHeaderProp.user_id)}
          else{handleUnFollowUser(postHeaderProp.user_id)}
        }}
      >
        {postHeaderProp.isFollowing ? "Followed" : "Follow"}
      </button>
    </header>
  );
};

export default PostHeader;
