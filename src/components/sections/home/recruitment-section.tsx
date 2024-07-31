import { ArrowUpRight } from "lucide-react"
import Container from "../../global/container"
import Button from "../../global/ui/button"

const RecruitmentSection = () => {
  return (
    <section className="lg:h-screen py-12 w-full flex items-center justify-center">
      <Container className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <img
          src="/man.jpg"
          className="hidden lg:block rounded-3xl w-[55vh] h-[70vh] object-cover"
          alt="homem de terno"
        />

        <div className="flex flex-col items-center lg:items-start gap-8 justify-center">
          <h1 className="text-4xl text-red-700 font-bold">Recrutamento</h1>
          <p className="text-xl text-center lg:text-start">
            Se você está pronto para se juntar a uma empresa líder em inovação
            no setor de transporte urbano e contribuir para a mobilidade
            eficiente da nossa comunidade.
          </p>
          <p className="text-xl ">Faça já a sua candidatura</p>
          <Button
            text="Candidate-se já"
            icon={ArrowUpRight}
            customStyle="bg-red-700 text-white text-sm"
          />
        </div>
      </Container>
    </section>
  )
}

export default RecruitmentSection
