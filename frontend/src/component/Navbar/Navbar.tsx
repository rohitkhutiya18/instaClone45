import type { RootState } from '../../store/store'
import { useSelector } from "react-redux"

const Navbar = () => {
  const token = useSelector((state: RootState) => state.userReducer.accessToken)
  return (
    <header className=" fixed top-0 left-0 lg:left-64 w-full lg:w-[calc(100%-16rem)] h-14 border-b bg-white z-40 flex items-center justify-between px-4 " > {/* Add Post */} <button className="text-2xl font-bold">+</button>
      {/* Logo */}
      <h1 className="text-xl font-bold">Ir-app</h1>
      {/* Like Button */}
      {token && <button>❤️</button>
      } </header>
  )
}

export default Navbar