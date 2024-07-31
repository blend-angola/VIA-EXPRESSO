import { Link } from "react-router-dom"
import { NAVIGATION_LINKS } from "../../../constants/header-content"

const NavigationBar = () => {
  return (
    <nav className="flex items-end justify-center flex-1 gap-4">
      {NAVIGATION_LINKS.map((link, index) => (
        <Link
          key={index}
          to={link.link ?? "#"}
          className="font-semibold uppercase text-[0.820rem] hover:text-red-600 text-black transition-all duration-200 ease-in-out"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavigationBar
