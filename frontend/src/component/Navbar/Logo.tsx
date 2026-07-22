import { MessageSquareQuote } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>

           {/* logo  */}
           <div className='flex w-10 h-10 items-center justify-center rounded-xl 
           bg-gradient-to-br from-indigo-500 to-violet-500 text-white 
           transition-transform duration-300 hover:rotate-6 hover:scale-110'>

            <h2><MessageSquareQuote /></h2>
           </div>

           {/* logo name  */}
           <div className='text-xl tracking-tight text-zinc-900 font-bold'>
            <h1>Insta</h1>
           </div>

    </div>
  )
}

export default Logo