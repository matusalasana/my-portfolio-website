import { useEffect, useState } from "react";

export interface Movie {
    id:number;
    title:string;
    poster_path: string;
    release_date:string;
    vote_average:number;
    overview:string;
    vote_count:number;
    original_title:string;
    // Add more fields as needed
}

const useMovies=()=> {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [err,setErr]=useState('');
  const [isLoading,setLoading]=useState(false)

  
  const getMovie = () => {
    {setLoading(true)}
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=4c0d21331fa20cabab38fd6698ec8aa9")
      .then((res) =>res.json())
      .then((json) => {
        setMovies(json.results),
        setLoading(false)})
      .catch(err=>{
        setErr(err.message),
        setLoading(false)})

  };
  

    
    useEffect(() => {
      getMovie();
      document.title='https://www.movies-hub.com'
    }, [])

            return {movies,err,isLoading}


};



  
  export default useMovies