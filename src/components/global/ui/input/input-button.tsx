import { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  text: string
  customStyle?: string
  icon?: ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>

const InputButton = ({ icon: Icon, text, customStyle, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge("px-4 h-10 w-64 justify-between flex items-center gap-1 rounded-lg bg-red-700", customStyle)}
    >
      {text}
      {Icon && <Icon size={14} />}
    </button>
  )
}

export default InputButton
