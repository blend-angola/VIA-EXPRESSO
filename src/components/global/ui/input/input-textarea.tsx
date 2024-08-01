import { TextareaHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  text?: string
  customStyle?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const InputTextarea = ({ text, customStyle, ...rest }: Props) => {
  return (
    <textarea
      {...rest}
      value={text}
      className={twMerge(
        "outline-none border resize-none rounded-lg",
        customStyle
      )}
    />
  )
}

export default InputTextarea
