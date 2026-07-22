import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Sidebar from '../component/Sidebar/Sidebar'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <div className='max-h-screen bg-gray-100 '>
           <Navbar></Navbar>
           <div className='flex flex-row top-16 pt-16'>
            <Sidebar/>
            <div className='flex-1 p-6 ml-64'>
                {children}
            </div>
           </div>
      </div>
    </>
  )
}

export default Layout