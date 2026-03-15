// import React from 'react'

import {  SearchIcon } from "lucide-react"
import InputField from "../InputField"
// import AuthButton from "../AuthButton"
import Button from "../buttons/Button"


function Topbar() {
  
  
  return (
    <div className="flex bg-white p-3 gap-4 items-center justify-between">

      <div className="flex items-center justify-between  gap-4 w-2/3">
        <InputField
          type="text"
          name="search"
          value=""
          icon={SearchIcon}
          placeholder="Search your notes..."
        />

        <Button text="+ Create new Note" size="md" />
      </div>

      <div className="w-1/3 flex justify-end items-center gap-3">
        {/* profile section */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
        <span className="text-sm font-medium text-slate-700">
          Nishant
        </span>
      </div>

    </div>
  )
}



export default Topbar
