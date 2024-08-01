import Container from "../components/global/container"
import Vacancies from "../components/sections/recruitment-section/vacancies"
import RecruitmentForm from "../components/sections/recruitment-section/recruitment-form"

const RecruitmentPage = () => {
  return (
    <main className="py-24 w-full">
      <Container className="flex lg:flex-row flex-col items-start justify-center gap-10 lg:gap-16">
        <div className="flex gap-6 flex-col lg:hidden">
          <h1 className="text-red-700 font-semibold text-2xl text-center md:text-3xl capitalize">
            Recrutamento via expresso
          </h1>
          <p className="text-black text-lg text-center">
            A via expresso tem mais de 200 vagas nas mais diferentes áreas
            profissionais, preenche os campos abaixo às vagas disponíveis.
          </p>
        </div>
        <Vacancies />
        <RecruitmentForm />
      </Container>
    </main>
  )
}

export default RecruitmentPage
