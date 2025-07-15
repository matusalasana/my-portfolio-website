

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";
import SortingMovies from "./SortingMovies";
import SearchInput from "./SearchInput";
import DynamicMovieHeading from "./DynamicMovieHeading";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";



function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(null)
    const [sortBy,setSortBy]=useState< string | null>(null)
    const [query,setQuery]=useState<string>('')
    const [moviesHeading,setMoviesHeading]=useState('All')

  return (
    <Box>
      <NavBar 
        children={<SearchInput onSearch={(query)=>(setQuery(query),setMoviesHeading(`search results for "${query}"`))}/>}
      />
      <GenreList onClickAll={(defaultGenre)=>(setgenreid(defaultGenre),setMoviesHeading('All'))} selectedGenre={genreId} onSelectGenre={(id,genre)=>(setgenreid(id),setMoviesHeading(genre))} />
      <DynamicMovieHeading genreTitle={moviesHeading+" Movies"}/>
      <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
      <MovieCard searchQuery={query} sortBy={sortBy} genreId={genreId}/>
    </Box>
  )
}

export default MoviesPage