

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";
import SortingMovies from "./SortingMovies";
import SearchInput from "./SearchInput";
import DynamicMovieHeading from "./DynamicMovieHeading";



function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(null)
    const [sortBy,setSortBy]=useState< string | null>(null)
    const [query,setQuery]=useState<string>('')
    const [moviesHeading,setMoviesHeading]=useState('')

  return (
    <div>
        <SearchInput onSearch={(query)=>setQuery(query)}/>
        <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
        <GenreList selectedGenre={genreId} onSelectGenre={(id,genre)=>(setgenreid(id),setMoviesHeading(genre))} />
        <DynamicMovieHeading genreTitle={moviesHeading}/>
        <MovieCard searchQuery={query} sortBy={sortBy} genreId={genreId}/>
    </div>
  )
}

export default MoviesPage