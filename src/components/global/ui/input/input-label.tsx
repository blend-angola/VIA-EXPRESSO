import { twMerge } from "tailwind-merge"

type Props = {
  label: string
  customStyle?: string
}

const InputLabel = ({ customStyle,label }: Props) => {
  return (
    <label htmlFor={label} className={twMerge("font-bold", customStyle)}>
      {label}
    </label>
  )
}

export default InputLabel
