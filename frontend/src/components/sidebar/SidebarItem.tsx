import React from 'react'
import type {LucideIcon } from 'lucide-react'


type Props={

    icon:LucideIcon
    text:string
}

function SidebarItem({icon:Icon,text}:Props) {
  return (
    <div className='flex justify-around items-center border rounded m-5'>

        <span>{<Icon/>}</span>
        <p className='mr-2'>{text}</p>

    </div>
  )
}

export default SidebarItem