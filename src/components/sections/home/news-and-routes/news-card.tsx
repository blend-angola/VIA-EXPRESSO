import RoundedImg from "./rounded-img"
import { ArrowUpRight } from "lucide-react"
import LinkButton from "../../../global/ui/link-button"

const NewsCard = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <h1 className="text-center lg:text-left text-red-700 text-3xl lg:text-4xl font-semibold">
        Últimas Notícias
      </h1>
      <div className="relative w-full h-[45vh] rounded-3xl">
        <img
          src="/bus-card.jpg"
          alt="bus-image"
          className="absolute left-0 top-0 w-full h-full object-cover rounded-3xl"
        />
        <RoundedImg image="/icons/news.png" position="top-12 -left-16" />
      </div>
      <p className="text-center lg:text-start">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quisquam
        numquam, recusandae deserunt consequatur voluptate cum, ex veritatis
        consequuntur, enim est tempora esse! Eligendi quasi inventore sequi ipsa
        minus reprehenderit!
      </p>

      <LinkButton href="" text="Ver mais" icon={ArrowUpRight} />
    </div>
  )
}

export default NewsCard
