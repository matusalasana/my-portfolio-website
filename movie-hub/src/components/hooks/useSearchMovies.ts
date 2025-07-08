

import { useEffect, useState } from "react";
import type { Movie } from "./useMovies";

const useSearchMovies = (query: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [err, setErr] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const searchMovies = (genreId:number) => {
      setLoading(true);
      const url = genreId
          ? `https://api.themoviedb.org/3/search/movie?api_key=4c0d21331fa20cabab38fd6698ec8aa9&query=${encodeURIComponent(query)}&with_genres=${genreId}&language=en-US`
          : `https://api.themoviedb.org/3/search/movie?api_key=4c0d21331fa20cabab38fd6698ec8aa9&query=${encodeURIComponent(query)}&language=en-US`;
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setMovies(json.results || []);
          setLoading(false);
        })
        .catch(err => {
          setErr(err.message);
          setLoading(false);
        });
    };

    searchMovies(28);

  }, [query]);

  return { movies, err, isLoading };
};

export default useSearchMovies;
