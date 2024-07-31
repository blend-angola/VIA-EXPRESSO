import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
  children: React.ReactNode
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge("px-4 lg:px-0 mx-auto lg:w-[85vw] w-full", className)}
    >
      {children}
    </div>
  )
}

export default Container
