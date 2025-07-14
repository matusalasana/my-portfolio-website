

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";
import SortingMovies from "./SortingMovies";


function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(28)
    const [sortBy,setSortBy]=useState< string | null>(null)

  return (
    <div>
        <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
        <GenreList selectedGenre={genreId} onSelectGenre={(id)=>setgenreid(id)} />
        <MovieCard sortBy={sortBy} genreId={genreId}/>
    </div>
  )
}

export default MoviesPage