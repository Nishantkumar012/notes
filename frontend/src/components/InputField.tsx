import type { LucideIcon } from "lucide-react"

type Props = {
  label: string
  type: string
  placeholder?: string
  rightText?: string
  icon?: LucideIcon
  rightIcon?:LucideIcon
}

function InputField({ label, type, placeholder, rightText,icon:Icon, rightIcon:Righticon }: Props) {
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

      {/* lassName="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"  */}
        
      <div className="relative ">

        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"/>
        )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full  rounded-lg p-2 pl-9 bg-slate-200 outline-none focus:ring-2 focus:ring-teal-400"
        />

        {
          Righticon && (
            <button>

              <Righticon className="absolute right-3 top-1/2 -translate-y-1/2 w-4   text-gray-500 "/>
            </button>
          )
        }
        </div>
    </div>
  )
}

export default InputField
