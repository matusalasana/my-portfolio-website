

import useMovies from "./hooks/useMovies";

interface props{
  onSortChange:()=>void;
  sortBy: string;
}



function SortingMovies() {



  return (
    <div className="sorting-movies">
      <h1>Sort Movies</h1>
    </div>
  );
}

export default SortingMovies;