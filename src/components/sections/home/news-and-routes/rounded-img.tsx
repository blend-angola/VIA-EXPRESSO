import { twMerge } from "tailwind-merge"

type Props = {
  image: string
  position: string
}

const RoundedImg = ({ image, position }: Props) => {
  return (
    <div
      className={twMerge(
        "absolute hidden lg:flex items-center justify-center top-12 -left-16 rounded-full size-32 lg:size-44 border-[10px] border-zinc-100 p-2 bg-red-700",
        position
      )}
    >
      <img src={image} className="size-24" alt="" />
    </div>
  )
}
// "/icons/news.png"
export default RoundedImg
