import { Outlet } from "react-router-dom"
import Header from "./components/global/header/header"
import Footer from "./components/global/footer/footer"

const RootLayout = () => {
  return (
    <main className="w-full flex flex-col font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default RootLayout
