import { POSITIONS } from "../../../constants/recruitment-content"

const Vacancies = () => {
  return (
    <div className="flex flex-col flex-[2] shadow-2xl">
      <h1 className="text-2xl text-center lg:text-start md:text-3xl text-black font-semibold p-12">Vagas disponíveis</h1>
      <ul className="flex flex-col">
        {POSITIONS.map((position, index) => (
          <li
            key={index}
            className="w-full cursor-pointer bg-white transition-all duration-200 ease-in-out text-black hover:bg-red-700 hover:text-white px-12 py-6 text-xl"
          >
            {position}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Vacancies
