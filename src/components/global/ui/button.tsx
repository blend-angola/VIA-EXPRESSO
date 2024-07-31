import { ElementType, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
  text: string
  icon?: ElementType
  customStyle?: string
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ text, icon: Icon, customStyle, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "px-2 h-12 bg-transparent border border-red-700 text-red-700 text-center w-fit rounded-lg flex items-center gap-1",
        customStyle
      )}
    >
      {text}
      {Icon && <Icon size={14} />}
    </button>
  )
}

export default Button
