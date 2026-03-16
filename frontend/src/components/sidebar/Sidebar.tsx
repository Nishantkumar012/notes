// import React from 'react'
import SidebarItem from './SidebarItem'
import {
  // User,
  // StickyNoteIcon,
  FileText,
  StickyNote,
  Trash2,
  Star,
  Settings,
} from 'lucide-react'
import AuthButton from '../AuthButton'

function Sidebar() {
  return (
    // <div className="flex flex-col w-1/6">
    //   <div className="ml-2 flex text-align">
    //     <StickyNoteIcon className="w-5 h-8 mt-1 " />
    //     <h1 className="text-center text-md font-bold mt-2 ml-1">Notes App</h1>
    //   </div>
    //   <p className="text-center">Personal Workspace</p>
    //   <SidebarItem icon={FileText} text="All Notes" />
    // </div>

    <aside className="w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-teal-600 w-10 h-10 rounded-lg flex items-center justify-center text-white">
          <StickyNote className="w-40" />
        </div>

        <div>
          <h1 className="font-bold text-lg leading-none">Notes App</h1>
          <p className="text-xs text-slate-500 mt-1">Personal Workspace</p>
        </div>
      </div>

      <nav>
        <SidebarItem icon={FileText} text="All Notes" active />
        <SidebarItem icon={Star} text="Favorites" />
        <SidebarItem icon={Trash2} text="Favorites" />
        <SidebarItem icon={Settings} text="Favorites" />

        <div className="pt-6 pb-2 px-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {' '}
            Categories
          </p>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 test-slate-600">
          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
          <span>Work</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 test-slate-600">
          <span className="w-2 h-2 rounded-full bg-teal-300"></span>
          <span>Personal</span>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 test-slate-600">
          <span className="w-2 h-2 rounded-full bg-red-300"></span>
          <span>Ideas</span>
        </div>
      </nav>

      <div className="p-4 mt-50 border-t border-slate-200">
        <AuthButton text="+ New Category" />
      </div>
    </aside>
  )
}

export default Sidebar
