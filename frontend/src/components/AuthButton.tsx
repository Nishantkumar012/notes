import React, { type ReactElement } from 'react'

type Props = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

function AuthButton({ text, onClick, type }: Props) {
  return (
    <button
      className="bg-teal-500 text-center font-medium mt-5 text-white py-2 rounded-lg w-full hover:bg-teal-600"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default AuthButton
