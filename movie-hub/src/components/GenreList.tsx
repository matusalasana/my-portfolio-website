import { Image } from "@chakra-ui/react"
import useGenre from "./hooks/useGenres"

function GenreList() {
    const {genres}=useGenre()
  return (
    <ul>
        {genres.map(genre=>
            <li key={genre.id}><Image src={genre.image_background} />
                {genre.name}
            </li>)}

    </ul>
  )
}

export default GenreList