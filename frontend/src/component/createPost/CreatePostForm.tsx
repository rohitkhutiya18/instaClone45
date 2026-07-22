import {  X } from "lucide-react"

const CreatePostForm = () => {
  return (
    <>
    <div className="max-w-4xl p-2 flex items-center justify-center">
        {/* create post heading  */}
       <div className="space-y-2 flex flex-col w-100 p-3.5 gap-2  border border-zinc-300/2 rounded-md shadow-lg">
          
          {/* heading section  */}
          <div className="flex items-center justify-between  ">
            <p className="text-md text-zinc-800">New Post</p>
            <p className="text-zinc-800"><X size={20}/></p>
          </div>

          {/* caption section  */}
          <div className="flex flex-col gap-2 justify-start ">
              <p className="text-zinc-800">Caption</p>
              <div className="relative ">

                <span className="absolute right-2 top-3 text-xs text-zinc-600"><X/></span>

                <input type="text" placeholder="write caption" className="w-full h-6 text-sm outline-none py-6 
                pl-2 pr-2 placeholder:text-zinc-600 border border-zinc-400/20 rounded-md transition-all duration-300 
                focus:ring-4 focus:ring-indigo-500 active:ring-indigo-500 focus:border-indigo-500 bg-white-700"  />
                
              </div>
              
          </div>

       </div>


    </div>
    </>
  )
}

export default CreatePostForm