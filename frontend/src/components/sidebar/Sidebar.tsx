import React from 'react'
import SidebarItem from './SidebarItem'
import {User} from "lucide-react"

function Sidebar() {
  return (
    <div className='flex flex-col w-1/6'>
             <h1 className='text-center text-md font-bold mt-2'>Notes App</h1>
             <p className='text-center'>Personal Workspace</p>
             <SidebarItem icon={User} text='Profile'/>
    </div>
  )
}

export default Sidebar