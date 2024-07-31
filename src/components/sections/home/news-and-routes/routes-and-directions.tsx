import NewsCard from "./news-card"
import Container from "../../../global/container"
import RoutesAndDirectionCard from "./routes-and-direction-card"

const RoutesAndDirections = () => {
  return (
    <section className="w-full flex items-center justify-between bg-zinc-100 min-h-screen py-12">
      <Container className="grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-20">
        <NewsCard />
        <RoutesAndDirectionCard />
      </Container>
    </section>
  )
}

export default RoutesAndDirections
