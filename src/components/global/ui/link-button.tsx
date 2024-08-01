import { AnchorHTMLAttributes, ElementType } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

type ButtonProps = {
  text: string
  href: string
  icon?: ElementType
  customStyle?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({
  href,
  text,
  icon: Icon,
  customStyle,
  ...rest
}: ButtonProps) => {
  return (
    <Link
      to={href}
      {...rest}
      className={twMerge(
        "px-2 h-12 bg-transparent border border-red-700 text-red-700 text-center w-fit rounded-lg flex items-center gap-1",
        customStyle
      )}
    >
      {text}
      {Icon && <Icon size={14} />}
    </Link>
  )
}

export default LinkButton
