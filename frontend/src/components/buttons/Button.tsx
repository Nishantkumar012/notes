import type { ReactNode } from "react"

type Props = {
  text?: string
  type?: "button" | "submit" | "reset"
  size?: "sm" | "md" | "lg"
  color?: "teal" | "red" | "blue" | "gray"
  icon?: ReactNode
  className?: string
  fullWidth?: boolean
}

function Button({
  text,
  type = "button",
  size = "md",
  color = "teal",
  icon,
  className = "",
  fullWidth = false,
}: Props) {

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const colors = {
    teal: "bg-teal-600 text-white hover:bg-teal-700",
    red: "bg-red-500 text-white hover:bg-red-600",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    gray: "bg-slate-200 text-slate-700 hover:bg-slate-300",
  }

  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-2
        rounded-lg transition
        ${sizes[size]}
        ${colors[color]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  )
}

export default Button