

import MovieCard from "./MovieCard";
import GenreList from "./GenreList";
import { useEffect, useState } from "react";
import SortingMovies from "./SortingMovies";
import SearchInput from "./SearchInput";
import DynamicMovieHeading from "./DynamicMovieHeading";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MoviePagination from "./MoviePagination";
import SearchSuggestions from "./SearchSuggestions";
import useSearchMovies from "./hooks/useSearchMovies";
import useMovies, { type Movie } from "./hooks/useMovies";


export interface Props{
    searchQuery:string
}

function MoviesPage({searchQuery}:Props) {

    const [genreId,setgenreid]=useState<number | null>(null)
    const [sortBy,setSortBy]=useState< string | null>(null)
    const [query,setQuery]=useState<string>('')
    const [moviesHeading,setMoviesHeading]=useState('All')
    const [page,setPage]=useState(1)
    const [filteredMovies,setFilteredMovies]=useState<Movie[]>([])
    const {data:movies=[]}= searchQuery 
      ? useSearchMovies(query)
      : useMovies(genreId,sortBy,page)


useEffect(()=>{
  if (filteredMovies.length==0){
  setFilteredMovies(movies)
  }
},[movies])

  return (
    <Box>
      <NavBar 
        children={<SearchInput onUserInput={(Input)=>(setQuery(Input),setMoviesHeading(`search results for "${query}"`))}/>}
      />
      <SearchSuggestions onClickSuggestion={(movie)=>setFilteredMovies(movie)} userInput={query}/>
      <GenreList onClickAll={(defaultGenre)=>(setgenreid(defaultGenre),setMoviesHeading('All'))} selectedGenre={genreId} onSelectGenre={(id,genre)=>(setgenreid(id),setMoviesHeading(genre))} />
      <DynamicMovieHeading genreTitle={moviesHeading+" Movies"}/>
      <SortingMovies onSortChange={(value)=>setSortBy(value)}/>
      <MovieCard movies={filteredMovies}/>
      <MoviePagination btnStatus={page==1 && true} onClickPrevious={()=>setPage(page-1)} onClickNext={()=>setPage(page+1)} />
    </Box>
  )
}

export default MoviesPage