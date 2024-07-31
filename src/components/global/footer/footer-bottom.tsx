import Logo from "../../logo"
import Container from "../container"
import { NAVIGATION_LINKS } from "../../../constants/header-content"

const FooterBottom = () => {
  return (
    <div className="min-h-[50vh] w-full bg-[#0D1A32]">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-10 py-20">
        <div className="w-full h-full flex flex-col items-center lg:items-start gap-3 md:col-span-3 lg:col-span-2">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            Quem Somos?
          </h1>
          <div className="flex flex-col text-zinc-300 text-center lg:text-start text-lg font-extralight">
            <p>Somos uma empresa líder em transporte inovador!</p>
            <p>Nossa frota de autocarros automáticos oferece uma solução</p>
            <p>eficiente , segura e sustentável para a mobilidade urbana.</p>
          </div>
          <div className="flex flex-col text-zinc-300 text-center lg:text-start text-lg font-extralight">
            <p>Com tecnologia avançada e um compromisso com o conforto</p>
            <p>dos pasageiros, transforma suas viagens em uma</p>
            <p>experiência excepcional.</p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center lg:items-start gap-3 lg:px-8 lg:border-x border-x-white">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            Menu
          </h1>
          <div className="flex flex-col text-zinc-300 text-center lg:text-start text-lg font-extralight">
            {NAVIGATION_LINKS.map((link, index) => (
              <p key={index}>{link.label}</p>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center lg:items-start gap-3">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            Contactos
          </h1>
          <div className="flex flex-col text-zinc-300 text-center lg:text-start text-lg font-extralight lg:mb-0 mb-8">
            <p>Tel: +244 900 000 000</p>
            <p>geral@viaexpresso.com</p>
            <p>Belas Business Park Edifício Namibe, 3º andar 302</p>
            <p>Talatona - Luanda</p>
          </div>
          <Logo />
        </div>
      </Container>
    </div>
  )
}

export default FooterBottom
