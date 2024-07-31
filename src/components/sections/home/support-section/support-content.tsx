import { Phone } from "lucide-react"

const SupportContent = () => {
  return (
    <div className="lg:ml-[3rem] flex flex-col gap-8 lg:gap-12 items-center lg:items-start">
      <h1 className="text-3xl md:text-4xl font-semibold text-red-700">
        Apoio ao cliente 24/7
      </h1>
      <p className="text-xl font-normal text-center lg:text-start">
        Disponibilizamos ao nosso cliente suporte por meio do nosso call center
        24 horas por dia durante todos os dias da semana. Pode contar com a
        nossa equipa de apoio ao cliente para exclarecimento de dúvidas,
        questões comercias e outra qualquer questão que achar importante, fale
        connosco.
      </p>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full size-14 bg-red-600">
          <div className="flex items-center justify-center size-8 bg-red-700 rounded-full p-2">
            <Phone fill="#fff" color="#fff" />
          </div>
        </div>
        <div className="flex flex-col text-2xl">
          <h3>Contacte-nos já:</h3>
          <h3 className="font-bold">
            <span className="font-extralight">(+244)</span>222 337 000
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SupportContent
