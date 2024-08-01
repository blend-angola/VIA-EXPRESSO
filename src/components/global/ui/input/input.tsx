import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = { customStyle?: string } & InputHTMLAttributes<HTMLInputElement>

const Input = ({ customStyle, ...rest }: Props) => {
  return (
    <input
      {...rest}
      className={twMerge(
        "px-3 py-2 border rounded-lg w-full outline-none",
        customStyle
      )}
    />
  )
}

export default Input
