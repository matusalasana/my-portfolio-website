import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Movie {
    id:number;
    title:string;
    poster_path: string;
    release_date:string;
    vote_average:number;
    vote_count:number;
}


function useMovies(){


  return useQuery<Movie[]>({
    queryKey:['movies'],
    queryFn:()=>
      axios
        .get('https://api.themoviedb.org/3/discover/movie',{
          params:{
            api_key:'4c0d21331fa20cabab38fd6698ec8aa9'
          }
        })
  })

}

export default useMovies