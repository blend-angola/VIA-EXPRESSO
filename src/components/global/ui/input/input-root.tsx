import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  customStyle?: string
}

const InputRoot = ({ customStyle, children }: Props) => {
  return (
    <div className={twMerge("flex h-auto flex-col gap-2", customStyle)}>
      {children}
    </div>
  )
}

export default InputRoot
