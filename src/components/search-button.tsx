import { Search } from "lucide-react"

const SearchButton = () => {
  return (
    <button className="md:size-9 size-8 p-2 flex items-center justify-center rounded-full bg-zinc-300">
      <Search className="text-neutral-700" size={14} />
    </button>
  )
}

export default SearchButton
