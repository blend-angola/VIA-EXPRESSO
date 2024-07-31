import Logo from "../../logo"
import SearchButton from "../../search-button"
import SelectLanguageButton from "../../select-language-button"
import Container from "../container"
import MobileMenu from "./mobile-menu"

const MobileHeader = () => {
  return (
    <Container>
      <div className="flex lg:hidden mt-2 items-center justify-between gap-4 lg:gap-0 w-full lg:w-fit">
        <MobileMenu />
        <Logo />
        <div className="flex lg:hidden items-center w-fit">
          <SearchButton />
          <SelectLanguageButton />
        </div>
      </div>
    </Container>
  )
}

export default MobileHeader
