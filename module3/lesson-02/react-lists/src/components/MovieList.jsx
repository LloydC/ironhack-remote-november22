import { useState } from 'react';
 
// import the array of movie objects
import moviesData from '../movies.json';
import MovieCard from './MovieCard';
 
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);

    const deleteMovie = (id) => {
        // find the movie with the matching "id"
        // remove this movie from the state variable "movies"
        const copyOfMovies = [...movies]
        const filteredMovies = copyOfMovies.filter(movie => movie._id !== id)
        setMovies(filteredMovies)
    }
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map( movie => {
        return (
            <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>
          );
      })}
    </div>
  );
}
 
export default MovieList;