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


function useMovies(genreId:number | null,sortBy:string | null){


  return useQuery<Movie[]>({
    queryKey:['movies',sortBy,genreId],
    queryFn:()=>
      axios
        .get('https://api.themoviedb.org/3/discover/movie',{
          params:{
            api_key:'4c0d21331fa20cabab38fd6698ec8aa9',
            sort_by:sortBy,
            with_genres:genreId,
          }
        })
        .then(response=>response.data.results)
  })

}

export default useMovies