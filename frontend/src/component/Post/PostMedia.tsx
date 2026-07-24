import type { postImageInterface } from "../../types/Post.Interface";

interface postMediaPropInterface{
  postMediaProp:postImageInterface[]
}

const PostMedia = ({postMediaProp}:postMediaPropInterface) => {
    
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
        <div className="aspect-ratio ">
          <img
            src={postMediaProp[0]?.url}
            alt=""
            loading="lazy"
            className="
            h-full w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default PostMedia;
