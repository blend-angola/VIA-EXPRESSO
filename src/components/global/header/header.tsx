import NavigationContainer from "./navigation-container"
import HeaderTop from "./header-top"
import Logo from "../../logo"
import Container from "../container"
import MobileHeader from "../mobile/mobile-header"

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <hr className="w-full h-[0.10rem] bg-zinc-500" />

      <Container className="lg:flex items-center hidden h-[18vh]">
        <Logo />
        <NavigationContainer />
      </Container>
      <MobileHeader />
    </header>
  )
}

export default Header
