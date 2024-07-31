import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="relative w-full h-16 lg:w-96 lg:h-24 mb-4">
      <img
        alt="logotipo"
        src="/logo/via-expresso-logo.jpg"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </Link>
  )
}

export default Logo
