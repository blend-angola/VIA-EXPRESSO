import { Phone } from "lucide-react"
import Container from "../container"

const FooterTop = () => {
  return (
    <div className="h-full w-full bg-[#030C1D]">
      <Container className="flex lg:flex-row items-center flex-col justify-start gap-10 lg:gap-36 py-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl font-bold text-center lg:text-start text-white">
            Junte-se a nós{" "}
          </h1>
          <h4 className="font-extralight text-white text-center lg:text-start text-lg lg:text-xl">
            Uma jornada rumo ao futuro da mobilidade urbana!
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white ">
            Linha de Atendimento
          </h1>
          <button className="flex items-center justify-center gap-2 p-2 border rounded-xl">
            <div className="size-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="size-6 p-2 bg-red-700 rounded-full flex items-center justify-center">
                <Phone fill="#fff" stroke="#fff" />
              </div>
            </div>
            <p className="font-bold text-xl text-white">
              <span className="font-extralight">(+244)</span> 222 337 000
            </p>
          </button>
        </div>
      </Container>
    </div>
  )
}

export default FooterTop
