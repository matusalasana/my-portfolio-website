

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useState } from "react";
import SortingMovies from "./SortingMovies";
import SearchInput from "./SearchInput";
import DynamicMovieHeading from "./DynamicMovieHeading";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MoviePagination from "./MoviePagination";
import SearchSuggestions from "./SearchSuggestions";



function MoviesPage() {

    const [genreId,setgenreid]=useState<number | null>(null)
    const [sortBy,setSortBy]=useState< string | null>(null)
    const [query,setQuery]=useState<string>('')
    const [moviesHeading,setMoviesHeading]=useState('All')
    const [page,setPage]=useState(1)

  return (
    <Box>
      <NavBar 
        children={<SearchInput onUserInput={(Input)=>(setQuery(Input),setMoviesHeading(`search results for "${query}"`))}/>}
      />
      <SearchSuggestions userInput={query}/>
      <GenreList onClickAll={(defaultGenre)=>(setgenreid(defaultGenre),setMoviesHeading('All'))} selectedGenre={genreId} onSelectGenre={(id,genre)=>(setgenreid(id),setMoviesHeading(genre))} />
      <DynamicMovieHeading genreTitle={moviesHeading+" Movies"}/>
      <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
      <MovieCard page={page} searchQuery={query} sortBy={sortBy} genreId={genreId}/>
      <MoviePagination btnStatus={page==1 && true} onClickPrevious={()=>setPage(page-1)} onClickNext={()=>setPage(page+1)} />
    </Box>
  )
}

export default MoviesPage