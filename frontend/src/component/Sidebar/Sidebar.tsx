import { Home, MessageCircle, Plus, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"


const Sidebar = () => {
    const sideBarItems = [
        {name:"home",element:<Home size={22}/>,link:'/home/feed'},
        {name:"chat",element:<MessageCircle size={22}/>,link:'/home/feed'},
        {name:"profile",element:<User size={22}/>,link:'/home/profile'}
    ]
  
    const navigate = useNavigate();
    const handleNavigateToCreatePost = ()=>{
           const token = window.localStorage.getItem("accessToken")
           if(!token){
            navigate('/login')
           }
           navigate('/home/create-post')
    }
  return (
    <>
       <div className="fixed left-0 top-16 flex flex-col justify-between p-6 w-64 h-[calc(100vh-4rem)] 
        bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-md ">

         <div className="space-y-3">
            {
                sideBarItems.map((val)=>{
                    return <Link to={val.link} key={val.name}>
                    <div
                    className={`flex items-center gap-2 p-4 rounded-xl cursor-pointer
                     hover:bg-gray-200 transition-all duration-100`}>
                      
                          {val.element}
                          <span className="text-zinc-400">
                            {val.name}
                          </span>
                    </div>
                    </Link>
                })
            }
         </div>

          <button className="w-full py-2 flex items-center justify-center gap-1.5 p-3 rounded-xl bg-black 
          font-semibold
           text-white hover:scale-105 transition-all">
            <Plus size={20}/>
            <span className="text-white" onClick={handleNavigateToCreatePost}>Create-Post</span>
          </button>

       </div>
    </>
  )
}

export default Sidebar