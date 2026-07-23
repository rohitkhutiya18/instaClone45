interface postMediaInterface{url:string,publicId:string}

interface postMediaPropInterface{
  postMediaProp:postMediaInterface[]
}

const PostMedia = ({postMediaProp}:postMediaPropInterface[] ) => {
    console.log(postMediaProp)
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
        <div className="aspect-ratio ">
          <img
            src={postMediaProp[0]?.url}
            alt=""
            className="
            h-full w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default PostMedia;
