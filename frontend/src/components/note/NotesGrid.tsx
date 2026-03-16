// import React from 'react'
import NoteCard from '../NoteCard'

function NotesGrid() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex flex-col mt-5 ml-10">
        <p className="text-xl font-semibold">All Notes</p>

        <p className="text-slate-600 text-sm">you have 12 notes</p>

        <div className="flex space-x-3">
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  )
}

export default NotesGrid
