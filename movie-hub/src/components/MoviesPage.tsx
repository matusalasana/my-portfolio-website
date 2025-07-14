

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";


function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(28)

  return (
    <div>
        <GenreList selectedGenre={genreId} onSelectGenre={(id)=>setgenreid(id)} />
        <MovieCard genreId={genreId}/>
    </div>
  )
}

export default MoviesPage