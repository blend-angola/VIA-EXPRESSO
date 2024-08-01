import Map from "./map"
import { ArrowUpRight } from "lucide-react"
import LinkButton from "../../global/ui/link-button"
import Container from "../../global/container"

const MapSection = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="bg-red-600 lg:bg-gradient-to-r from-red-600 via-red-600 to-transparent w-full">
        <Container className="h-[70vh] md:h-[80vh] flex items-center justify-between">
          <div className="w-full lg:w-[50vw] items-start justify-start flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4 lg:gap-1 text-3xl lg:text-6xl font-bold text-white">
              <p>5 Motivos e vantagens</p>
              <p>para usar a Via</p>
              <p>Express.</p>
            </div>

            <div className="flex flex-col items-start font-extralight text-lg md:text-xl text-white">
              <p>Está na hora de descobrir a nova maneira</p>
              <p>de se locomover pela cidade!</p>
            </div>

            <LinkButton
              href=""
              text="Saber mais"
              icon={ArrowUpRight}
              customStyle="bg-transparent text-white border-white"
            />
          </div>
        </Container>
      </div>

      <Map />
    </section>
  )
}

export default MapSection
