import { Calendar } from "lucide-react"
import SearchButton from "../../search-button"
import SelectLanguageButton from "../../select-language-button"
import Container from "../container"

const HeaderTop = () => {
  return (
    <Container>
      <div className="hidden lg:flex items-center py-6 w-full justify-between">
        <div className="flex items-center gap-1 text-sm">
          <Calendar className="text-red-500" size={20} />
          <p>
            Segunda à Sábado:
            <span className="font-bold">8h00 - 18h00</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <SearchButton />
          <SelectLanguageButton />
        </div>
      </div>
    </Container>
  )
}

export default HeaderTop
