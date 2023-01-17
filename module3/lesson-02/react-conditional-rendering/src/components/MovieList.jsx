import { useState } from 'react';
import moviesData from '../movies.json';
 
import MovieCard from './MovieCard';
 
function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const [showMovies, setShowMovies] = useState(true);
 
  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });
 
    setMovies(filteredMovies);
  };
 
  return (
    <div>
      <h2>Movie List</h2>
      {/* {movies.length > 0 ? movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
      }) : <p>No movies were found</p>} */}
        <button onClick={()=> setShowMovies(!showMovies)}>{showMovies ? 'Hide movies' : 'Show movies'}</button>

      {showMovies && movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
      })}
    </div>
  );
}
 
export default MovieList;