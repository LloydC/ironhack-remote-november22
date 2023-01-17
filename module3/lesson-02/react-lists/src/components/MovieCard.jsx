function MovieCard(props){
    const { movie, deleteMovie } = props;

    return(
        <div key={movie._id} className="MovieCard">
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Rating: {movie.IMDBRating}</p>
              <button className="btn-delete" onClick={()=> deleteMovie(movie._id)}>Delete </button>
        </div>
    )
}
export default MovieCard