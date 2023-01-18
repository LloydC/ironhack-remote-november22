import { useState } from "react";
import moviesDataJSON from "../movies.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
 
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}

      <AddMovie movies={movies} setMovies={setMovies}/>
    </div>
  );
}
 
export default MovieList;