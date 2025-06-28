import useGenre from "./hooks/useGenres"

function GenreList() {
    const {genres}=useGenre()
  return (
    <ul>
        {genres.map(genre=>
            <li key={genre.id}>
                {genre.name}
            </li>)}

    </ul>
  )
}

export default GenreList