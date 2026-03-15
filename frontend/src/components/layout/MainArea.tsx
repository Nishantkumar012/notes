// import React from 'react'
import Topbar from '../topbar/Topbar'
import NotesGrid from '../note/NotesGrid'


// function MainArea() {
//   return (
//     <div className="w-full h-screen bg-red-300 flex flex-col ">
//       <Topbar />
//       <NotesGrid />
//     </div>
//   )
// }


function MainArea() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar bg-slate-200">
      <Topbar />
      <NotesGrid />
    </div>
  )
}

export default MainArea
