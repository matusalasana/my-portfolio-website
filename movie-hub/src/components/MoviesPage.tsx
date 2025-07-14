

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";
import SortingMovies from "./SortingMovies";
import SearchInput from "./SearchInput";



function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(null)
    const [sortBy,setSortBy]=useState< string | null>(null)
    const [query,setQuery]=useState<string>('')

  return (
    <div>
        <SearchInput onSearch={(query)=>setQuery(query)}/>
        <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
        <GenreList selectedGenre={genreId} onSelectGenre={(id)=>setgenreid(id)} />
        <MovieCard searchQuery={query} sortBy={sortBy} genreId={genreId}/>
    </div>
  )
}

export default MoviesPage