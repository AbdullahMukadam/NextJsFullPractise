import React from 'react'
import Addblog from '../components/Addblog'
import GetBlogs from '../components/GetBlogs'

export default function page() {
  return (
    <div className='w-full h-full p-2 bg-gradient-to-r from-blue-600 to-red-400 flex items-center flex-col justify-between'>
        <Addblog />
        <GetBlogs />
    </div>
  )
}
