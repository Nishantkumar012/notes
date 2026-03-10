import React from 'react'

function Navbar() {
  return (
    <div className=' w-full p-4 shadow-md flex justify-center items-center'>
        <h1 className='text-xl font-bold'>
             Notes App 
        </h1>
        <button className='bg-blue-500 px-4 py-2 rounded'>
            Logout
        </button>
    </div>
  )
}

export default Navbar