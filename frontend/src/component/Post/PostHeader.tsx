import { MoreHorizontal } from "lucide-react"

const PostHeader = () => {
  return (
    <>
        <header className="flex items-center justify-between">
            {/* left avatar side  */}
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/20">
                 <img src="https://assets.leonardo.ai/aaIFJMFoBIGEg8Xf_image2065418511.png?auto=compress,format&q=80&fit=max&w=2560" 
                 className="h-full w-full object-cover"
                 alt="" />
                </div>

                {/* user info  */}
                <div className="">
                    <h3 className="text-zinc-700 font-semibold">irrr</h3>
                    <div className="flex items-center text-zinc-400 text-sm gap-2">
                        <span>@ro</span>
                        <span>.</span>
                        <span>2minago</span>
                    </div>
                </div>
               
               {/* <div className="flex-1 ">
                  <button className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full 
                transition-all hover:bg-white/30">
                    <MoreHorizontal size={20}/>
                </button>
               </div> */}
               
            </div>
        </header>
    </>
  )
}

export default PostHeader