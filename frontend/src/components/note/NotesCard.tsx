// import React from 'react'

function NotesCard() {
  return <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl transition-all cursor-pointer">
    
          <div className="flex justify-between items-center mb-3 ">
                 <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded ">
                    work
                 </span>
          </div>

             <h3 className="font-bold text-lg mb-2">
                 Project Brainstorming
             </h3>

             <p className="text-slate-500 text-sm line-clamp-2">
                 Discussion about architecture
                 -first
                 -second
             </p>


             <div className="mt-4 text-xs text-slate-400">
                 Updated 2 min ago
             </div>
    
    </div>
}

export default NotesCard
