import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Genre {
    id:number;
    name:string;
}


function useGenres(){


  return useQuery<Genre[]>({
    queryKey:['genres'],
    queryFn:()=>
      axios
        .get('https://api.themoviedb.org/3/genre/movie/list',{
          params:{
            api_key:'4c0d21331fa20cabab38fd6698ec8aa9'
          }
        })
        .then(response=>response.data.genres)
  })

}

export default useGenres