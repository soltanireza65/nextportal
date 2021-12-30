import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5"

const SearchIcon = () => {
  return (
    <Link href="/search/QuickSearch">
      <a>
        <IoSearchOutline size="2rem" color="black" />
      </a>
    </Link>
  )
}

export default SearchIcon
