import {Search} from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='relative flex items-center w-96'>

  
    <Search className='absolute left-4 h-5 w-5 text-zinc-400 '/>
   
    

    <input type="text" placeholder='search pepeoles' className='w-full rounded-full border border-zinc-200
     bg-zinc-100 py-2.5 pr-4 pl-12 text-sm outline-none transition-all duration-300 placeholder:text-zinc-300
     focus:bg-white-500 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400' />

    </div>
  )
}

export default SearchBar