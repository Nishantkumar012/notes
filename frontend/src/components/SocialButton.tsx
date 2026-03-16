type Props = {
  icon: string
  text: string
}

function SocialButton({ icon, text }: Props) {
  return (
    <button className="flex items-center justify-center gap-2  bg-slate-100 rounded-lg px-8 py-2 hover:bg-gray-200">
      <img src={icon} className="w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  )
}

export default SocialButton
