// import React from 'react'
import Topbar from '../topbar/Topbar'
import NotesGrid from '../note/NotesGrid'

function MainArea() {
  return (
    <div className="w-screen bg-red-300 flex flex-col ">
      <Topbar />
      <NotesGrid />
    </div>
  )
}

export default MainArea
