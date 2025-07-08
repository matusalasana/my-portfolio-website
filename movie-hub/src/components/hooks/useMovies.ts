import { useEffect, useState } from "react";

export interface Movie {
    id:number;
    title:string;
    poster_path: string;
    release_date:string;
    vote_average:number;
}

const useMovies=(genreId:number)=> {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [err,setErr]=useState('');
  const [isLoading,setLoading]=useState(false)
    
    useEffect(() => {
      const getMovie = () => {
        {setLoading(true)}
        const url = genreId
          ? `https://api.themoviedb.org/3/discover/movie?api_key=4c0d21331fa20cabab38fd6698ec8aa9&with_genres=${genreId}&language=en-US`
          : `https://api.themoviedb.org/3/movie/popular?api_key=4c0d21331fa20cabab38fd6698ec8aa9&language=en-US`;

        fetch(url)
          .then((res) =>res.json())
          .then((json) => {
            setMovies(json.results),
            setLoading(false)})
          .catch(err=>{
            setErr(err.message),
            setLoading(false)})

  };

      getMovie();
      document.title='https://www.movies-hub.com'
    }, [genreId])

            return {movies,err,isLoading}


};



  
  export default useMovies

