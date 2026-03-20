// import React from 'react'
import { useEffect, useState } from 'react'
import NoteCard from '../note/NotesCard'
import { getNotes } from '../../services/noteService'

type Note = {
  title: string
  content: string
}

function NotesGrid() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const fetchNotes = async () => {
      //  console.log("fethc m ")

      try {
        const res = await getNotes()
        // console.log(res);
        // console.log(res.data);

        setNotes(res.data.data)
      } catch (error) {
        console.error('Error fetching notes', error)
      }
    }

    fetchNotes()
  }, [])

  return (
    <div className=" h-screen ">
      <div className="flex flex-col p-6 h-full">
        <p className="text-xl font-semibold">All Notes</p>

        <p className="text-slate-600 text-sm">{`You have ${notes.length} notes`}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {notes.map((note) => (
            <NoteCard note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotesGrid
