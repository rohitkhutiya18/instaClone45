import { ImagePlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import type { createPostForm } from "../../types/CreatePost.from.Interface";
import { useCreatePostMutation } from "../../services/create.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<createPostForm>();

  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imgError, setImgError] = useState<string>("");
  const [requestCreatePost, { isLoading: creating }] = useCreatePostMutation();

  const onSubmit = async (data: { caption: string }) => {
    try {
      const formData = new FormData();

      formData.append("caption", data.caption || "");

      selectedImages.forEach((file) => {
        formData.append("postImages", file);
      });

      const res = await requestCreatePost(formData).unwrap();
      console.log(res);
      setSelectedImages([]);
      toast("post created successfully");
      navigate("/home");
    } catch (error) {
      console.log("error in post submit form", error);
    }
  };

  function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    const file = Array.from(e.target.files || []);
    if (selectedImages.length + file.length > 3) {
      setImgError("you can not upload more than 3 images");
      return;
    }
    setSelectedImages((prev: File[]) => {
      const result = [...prev, ...file];
      return result.slice(0, 3);
    });
  }

  const deleteImage = (deletingImageIndex: number) => {
    const filterImage = selectedImages.filter((_, index) => {
      return index !== deletingImageIndex;
    });

    setSelectedImages(filterImage);
  };

  return (
    <>
      <div className="max-w-4xl p-2 flex items-center justify-center">
        {/* create post heading  */}
        <div
          className="w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200 
          shadow-[0_25px_70px_rgba(0,0,0,0.15)] p-8 space-y-8"
        >
          {/* heading section  */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Create Post</h2>

              <p className="text-zinc-500 text-sm">share somethig with world</p>
            </div>

            <button className="w-10 h-10 rounded-full hover:bg-zinc-100 transition flex items-center justify-center">
              <X size={20} />
            </button>
          </div>

          {/* create post from starts from here  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* caption section  */}
            <div className="flex flex-col gap-2 justify-start ">
              <p className="text-zinc-800">Caption</p>
              <div className="relative ">
                <span className="absolute right-2 top-3 text-xs text-zinc-600">
                  <X />
                </span>

                <textarea
                  {...register("caption", { required: true, maxLength: 103 })}
                  placeholder="write caption"
                  className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 p-4 resize-none outline-none
                   transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500"
                />
                {errors.caption && (
                  <p className="text-sm text-rose-700">
                    {errors.caption.message}
                  </p>
                )}

                <div className="flex items-center justify-end">
                  <p className="text-sm text-zinc-500">
                    {watch("caption")?.length || 0}/103
                  </p>
                </div>
              </div>
            </div>

            {/* add image section  */}
            {/* <div
              className="w-full h-12 p-3 flex items-center justify-center 
          bg-white border-2 border-dashed border-zinc-300 rounded-xl "
            > */}

            <label
              className=" border-2 border-dashed border-zinc-300 rounded-3xl h-60 flex flex-col 
                justify-center items-center cursor-pointer transition hover:border-indigo-500 
                hover:bg-indigo-50"
            >
              <ImagePlus className="w-12 h-12 text-indigo-500" />

              <p className="font-semibold mt-4">Upload Images</p>

              <p className="text-zinc-500 text-sm">Click or Drag & Drop</p>

              <input
                type="file"
                accept="image/*"
                onChange={handleImages}
                multiple
                className="hidden"
              />
            </label>
            {imgError.length > 0 && (
              <p className="text-sm text-rose-700">{imgError}</p>
            )}
            {/* </div> */}

            {/* image section  */}
            {selectedImages.length > 0 &&
              selectedImages.map((val, i) => {
                return (
                  <div
                    key={val.name}
                    className="
                 relative w-full py-3
                "
                  >
                    <button
                      type="button"
                      className="absolute top-5 right-5 flex items-center justify-center text-sm text-white font-semibold
                  bg-rose-500 rounded-full cursor-pointer transition-all duration-150
                   hover:scale-110 hover:bg-rose-400 active-bg-rose-400 active:scale-110"
                      onClick={() => {
                        deleteImage(i);
                      }}
                    >
                      <X />
                    </button>
                    <img
                      src={URL.createObjectURL(val)}
                      alt={val.name}
                      className="object-fit h-full"
                    />
                  </div>
                );
              })}

            <div className="flex items-center justify-end">
              <button
                className="flex justify-center items-center px-3 py-2 bg-black/80 rounded-xl text-md
             text-white font-bold transition-all duration-300 hover:scale-105 cursor-pointer
            "
                type="submit"
              >
                {creating ? "creating..." : "create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePostForm;
