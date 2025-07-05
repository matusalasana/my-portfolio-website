import { useState,useEffect } from "react";

export interface Genre{
    name:string;
    id:number;
}

const useGenres=()=> {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err,setErr]=useState('');
  const [isLoading,setLoading]=useState(false)
  
  
  

    
    useEffect(() => {
      const getMovie = () => {
        {setLoading(true)}
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4c0d21331fa20cabab38fd6698ec8aa9&language=en-US")
          .then((res) =>res.json())
          .then((json) => {
            setGenres(json.genres),
            setLoading(false)})
          .catch(err=>{
            setErr(err.message),
            setLoading(false)})
      };

    getMovie(); 
    }, [])

    
    return {genres,err,isLoading}


};



  
export default useGenres

