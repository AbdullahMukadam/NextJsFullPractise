import React from 'react'
import Addblog from '../components/Addblog'

export default function page() {
  return (
    <div className='w-full h-full p-2 bg-gradient-to-r from-blue-600 to-red-400'>
        <Addblog />
        <h1 className='text-2xl text-white font-bold text-center'>Blog List</h1>
    </div>
  )
}
