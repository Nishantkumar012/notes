import React from 'react'

type Props = {
  text: string
}

function AuthButton({ text }: Props) {
  return (
    <div className="bg-teal-500 text-center font-medium mt-5 text-white py-2 rounded-lg w-full hover:bg-teal-600">
      {text}
    </div>
  )
}

export default AuthButton
