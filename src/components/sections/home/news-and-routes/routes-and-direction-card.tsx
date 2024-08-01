import RoundedImg from "./rounded-img"
import { ArrowUpRight } from "lucide-react"
import LinkButton from "../../../global/ui/link-button"

const RoutesAndDirectionCard = () => {
  return (
    <div className="flex flex-col h-full gap-6 w-full">
      <h1 className="text-center lg:text-left text-red-700 text-3xl lg:text-4xl font-semibold">
        Rotas e percursos
      </h1>
      <div className="relative bg-white rounded-3xl h-full items-center py-4 gap-6 flex flex-col">
        <RoundedImg image="/icons/map.png" position="top-12 -left-16" />
        <div className="flex flex-col items-center lg:items-start h-full gap-8 justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-base lg:text-lg">
              Saiba as nossas rotas e percursos
            </h3>

            <ol className="flex flex-col items-center lg:items-start list-disc text-lg lg:text-xl gap-6">
              <li>Marginal de Luanda</li>
              <li>Cidade Alta</li>
              <li>Ilha de Luanda </li>
              <li>Parque da Independência</li>
              <li>Avenida 21</li>
              <li>Vila de Viana</li>
              <li>Kilamba Kiaxi</li>
            </ol>
          </div>
          <LinkButton href="" text="Ver mais" icon={ArrowUpRight} />
        </div>
      </div>
    </div>
  )
}

export default RoutesAndDirectionCard
