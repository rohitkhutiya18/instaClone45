const PostFooter = () => {
  return (
    <div className="space-y-3">

      {/* Likes */}
      <p className="font-semibold text-white">
        1,284 likes
      </p>


      {/* Caption */}
      <div className="text-sm leading-relaxed">
        {/* <span className="font-semibold text-white">
          rohit_
        </span> */}

        <span className="ml-2 text-zinc-600">
        my caption
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
        2 hours ago
      </p>

    </div>
  );
};

export default PostFooter;