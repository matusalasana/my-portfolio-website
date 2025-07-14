import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Movie {
    id:number;
    title:string;
    poster_path: string;
    release_date:string;
    vote_average:number;
    vote_count:number;
    genre_ids:number;
}


function useSearchMovies(query:string | null){


  return useQuery<Movie[]>({
    queryKey:['search',query],
    queryFn:()=>
      axios
        .get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key:'4c0d21331fa20cabab38fd6698ec8aa9',
            query:query,
          }
        })
        .then(response=>response.data.results),

        enabled:!!query
  })

}


export default useSearchMovies