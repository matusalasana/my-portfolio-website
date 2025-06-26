import { HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Movie {
  poster_path: string;
  // Add other fields if needed
}

function MoviesPoasters() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [err,setErr]=useState('')

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=4c0d21331fa20cabab38fd6698ec8aa9")
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch(err=>setErr(err.message))
  };

  useEffect(() => {
    getMovie();
  }, []);

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
