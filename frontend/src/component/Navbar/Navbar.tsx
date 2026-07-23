import type { RootState } from '../../store/store'
import { useSelector } from "react-redux"
import Logo from './Logo'
import SearchBar from './SearchBar'
import { Bell } from 'lucide-react'

const Navbar = () => {
  const token = useSelector((state: RootState) => state.userReducer.accessToken)

  console.log(token)
  return (
    <nav className='sticky w-full h-16 top-0 left-0 z-50 bg-white/80 border-b border-zinc-200/70 backdrop-blur-2xl' >

    <div className='h-full flex items-center justify-between max-w-7xl px-6 '> 

     {/* logo  */}
      <Logo></Logo>

      {/* searchbar  */}
      <SearchBar></SearchBar>


    {/* notification  */}
    <div className='relative '>
       <button className='flex items-center justify-center w-10 h-10 rounded-full text-zinc-700 transition-all 
       hover:scale-105 active:scale-95 hover:bg-zinc-100 '>
        <Bell/>
       </button>
       <span className='absolute flex items-center justify-center top-1 right-2 w-2 h-2 rounded-full text-sm 
       bg-rose-400 ring-2 ring-white'></span>
    </div>

     </div>
      </nav>
  )
}

export default Navbar