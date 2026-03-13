// import React from 'react'
import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  text: string
  active?: boolean
}

function SidebarItem({ icon: Icon, text, active }: Props) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
      ${
        active
          ? 'bg-teal-50 text-teal-600'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <p className="text-sm font-medium">{text}</p>
    </div>
  )
}

export default SidebarItem
