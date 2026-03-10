type Props = {
  label: string
  type: string
  placeholder?: string
  rightText?: string
}

function InputField({ label, type, placeholder, rightText }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">{label}</label>

        {rightText && (
          <span className="text-sm font-medium text-teal-500 cursor-pointer">
            {rightText}
          </span>
        )}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg p-2 bg-slate-200 outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>
  )
}

export default InputField
