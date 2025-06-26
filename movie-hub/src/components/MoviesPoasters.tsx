import { HStack, Image, Text } from "@chakra-ui/react";
import useMovies from "./hooks/useMovies";



function MoviesPoasters() {

  const {err,movies}=useMovies()
  

  return (
    <>
    {err&&<Text>{err}</Text>}
      {movies.map((movie) => (
        <HStack justifyContent={'space-between'} padding={'10px'}>
          <Image width={'200px'} height={'300px'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </HStack>
      ))}
    </>
  );
}

export default MoviesPoasters;
