import { useState } from "react";
import moviesDataJSON from "../movies.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON); 
  
  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
   
    setMovies(filteredMovies);
  };
  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList} />
      <h2>Movie List</h2>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}

      <AddMovie movies={movies} setMovies={setMovies} moviesData={moviesData} setMoviesData={setMoviesData}/>
    </div>
  );
}
 
export default MovieList;