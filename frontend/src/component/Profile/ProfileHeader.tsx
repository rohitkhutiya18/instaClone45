import { Share2, Settings } from "lucide-react";

const ProfileHeader = () => {
  return (
    <section className="w-full">
      {/* Cover */}
      <div className="h-44 rounded-b-3xl bg-zinc-100 dark:bg-zinc-900" />

      {/* Profile Content */}
      <div className="px-6">
        {/* Avatar */}
        <div className="-mt-16 flex justify-center">
          <div className="rounded-full bg-white p-1 dark:bg-black">
            <img
              src=""
              alt="profile"
              className="
                h-32
                w-32
                rounded-full
                object-cover
              "
            />
          </div>
        </div>

        {/* User Information */}
        <div className="mt-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <h1
              className="
              text-2xl
              font-semibold
              tracking-tight
            "
            >
              Rohit Khutiya
            </h1>

            <button>
              <Settings size={18} className="text-zinc-500" />
            </button>
          </div>

          <p
            className="
            mt-1
            text-sm
            text-zinc-500
          "
          >
            @rohitkhutiya
          </p>

          <p
            className="
            mx-auto
            mt-4
            max-w-md
            text-sm
            leading-6
            text-zinc-600
            dark:text-zinc-400
          "
          >
            MERN Developer 🚀 Building an Instagram clone with modern
            technologies.
          </p>
        </div>

        {/* Stats */}
        <div
          className="
          mx-auto
          mt-6
          flex
          max-w-md
          justify-between
          border-y
          border-zinc-200
          py-4
          dark:border-zinc-800
        "
        >
          <div className="text-center">
            <p className="font-semibold">24</p>
            <span className="text-sm text-zinc-500">Posts</span>
          </div>

          <div className="text-center">
            <p className="font-semibold">2.3K</p>
            <span className="text-sm text-zinc-500">Followers</span>
          </div>

          <div className="text-center">
            <p className="font-semibold">180</p>
            <span className="text-sm text-zinc-500">Following</span>
          </div>
        </div>

        {/* Actions */}
        <div
          className="
          mt-5
          flex
          justify-center
          gap-3
        "
        >
          <button
            className="
              rounded-xl
              bg-black
              px-8
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-80
              dark:bg-white
              dark:text-black
            "
          >
            Edit Profile
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-zinc-200
              px-6
              py-2.5
              text-sm
              font-medium
              transition
              hover:bg-zinc-100
              dark:border-zinc-800
              dark:hover:bg-zinc-900
            "
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
