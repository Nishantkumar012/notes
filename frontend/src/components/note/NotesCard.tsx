// import React from 'react'
type Note = {
  // _id: string;
  title: string
  content: string
}

// function NotesCard({ note }: { note: Note }) {
//   return (
//     <div className="p-4 bg-white shadow rounded-lg">
//       <h2 className="text-lg font-semibold">{note.title}</h2>
//       <p className="text-sm text-gray-600 mt-2">{note.content}</p>
//     </div>
//   );
// }

// export default NotesCard;

function NotesCard({ note }: { note: Note }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xl transition-all cursor-pointer">
      <div className="flex justify-between items-center mb-3 ">
        <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded ">
          work
        </span>
      </div>

      <h3 className="font-bold text-lg mb-2">{note.title}</h3>

      <p className="text-slate-500 text-sm line-clamp-2">{note.content}</p>

      <div className="mt-4 text-xs text-slate-400">Updated 2 min ago</div>
    </div>
  )
}

export default NotesCard
