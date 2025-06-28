import useGenre from "./hooks/useGenres"

function Genre() {
    const {genres}=useGenre()
    const genreImages: { [key: number]: string } = {
        28: "public/Movie thumbnails/action-movie-thumbnail.jpg",
        12: "public/Movie thumbnails/adventure-movie-thumbnail.jpg",
        16: "public/Movie thumbnails/animation-movie-thumbnail.jpg",
        35: "public/Movie thumbnails/comedy.jpg",
        80: "public/Movie thumbnails/crime.jpg",
        99: "public/Movie thumbnails/documentary.jpg",
        18: "public/Movie thumbnails/drama.jpg",
        10751: "public/Movie thumbnails/family.jpg",
        14: "public/Movie thumbnails/fantasy.jpg",
        36: "public/Movie thumbnails/history.jpg",
        27: "public/Movie thumbnails/horror.jpg",
        10402: "public/Movie thumbnails/music.jpg",
        9648: "public/Movie thumbnails/mystery.jpg",
        10749: "public/Movie thumbnails/romance.jpg",
        878: "public/Movie thumbnails/scfi.jpg",
        10770: "public/Movie thumbnails/TV movie.jpg",
        53: "public/Movie thumbnails/thriller.jpg",
        10752: "public/Movie thumbnails/war.jpg",
        37: "public/Movie thumbnails/western.jpg",
    };

  return (
    <ul>
        
        {genres.map(genre=>
        <li className="genres-list" key={genre.id}>
        <img
            src={genreImages[genre.id] || "/images/default-icon.png"}
            alt={genre.name}
          />
          {genre.name}
          </li>)}

    </ul>
  )
}

export default Genre