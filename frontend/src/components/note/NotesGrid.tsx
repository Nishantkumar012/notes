// import React from 'react'
import NoteCard from '../note/NotesCard'

 function NotesGrid() {
 return (
  <div className=" h-screen ">
    <div className="flex flex-col p-6 h-full">
      <p className="text-xl font-semibold">All Notes</p>

      <p className="text-slate-600 text-sm">you have 12 notes</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />

        

      </div>
    </div>
  </div>
)
}

export default NotesGrid
