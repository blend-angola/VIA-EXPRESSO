import SupportContent from "./support-content"
import Container from "../../../global/container"

const SupportSection = () => {
  return (
    <section className="min-h-screen w-full py-24 lg:py-0 flex items-center justify-center">
      <Container className="flex lg:flex-row flex-col-reverse justify-center items-center gap-8">
        <SupportContent />
        <img
          src="/customer-service.jpg"
          alt="atendimento ao cliente"
          className="w-[90vw] h-[60vh] mb-12 lg:mb-0 lg:w-[25vw] lg:h-[70vh] object-cover rounded-[65px]"
        />
      </Container>
    </section>
  )
}

export default SupportSection
