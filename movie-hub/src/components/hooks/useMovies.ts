import { useEffect, useState } from "react";

interface Movie {
  poster_path: string;
  // Add more fields as needed
}

const useMovies=()=> {
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
      document.title='https://www.movies-hub.com'
    }, [])

            return {movies,err}


};



  
  export default useMovies