import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export interface Movie {
    id:number;
    title:string;
    poster_path: string;
    release_date:string;
    vote_average:number;
    vote_count:number;
    genre_ids:number[];
}


function useMovies(genreId:number | null,sortBy:string | null, page:number){


  return useQuery<Movie[]>({
    queryKey:['movies',sortBy,genreId, page],
    queryFn:()=>
      axios
        .get('https://api.themoviedb.org/3/discover/movie',{
          params:{
            api_key:'4c0d21331fa20cabab38fd6698ec8aa9',
            sort_by:sortBy,
            with_genres:genreId,
            page:page
          }
        })
        .then(response=>response.data.results)
  })

}

export default useMovies