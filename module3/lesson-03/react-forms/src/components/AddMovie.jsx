import { useState } from "react";

function AddMovie(props){
    const { movies , setMovies, moviesData, setMoviesData } = props;

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(0);
    const [hasOscars, setHasOscars] = useState(false);

    const handleSubmit = (event) => {
       event.preventDefault() // prevent the form from reloading the page   
        // Create a new movie
        const _id = `${Math.random()}`
        const newMovie = { _id, title, director, hasOscars, IMDBRating: Number(IMDBRating)}
        const updateMoviesCopy = [...movies, newMovie]
        const updateMoviesDataCopy = [...moviesData, newMovie];
        // add the new movie to the list of movies
        setMovies(updateMoviesCopy)
        setMoviesData(updateMoviesDataCopy)
        // empty the form
        setTitle("");
        setDirector("")
        setIMDBRating(0);
        setHasOscars(false)
    }
    return(
        <div>
            <h2>Add Movie Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter the Movie title" />
                <br/>
                <input type="text" name="director" value={director} onChange={(event) => setDirector(event.target.value)} placeholder="Enter director name" />
                <br/>
                <input type="number" name="IMDBRating" value={IMDBRating} onChange={(event)=> setIMDBRating(event.target.value)} placeholder="Enter your rating"/>
                <br/>
                <input type="checkbox" name="hasOscars" value={hasOscars} onChange={(event) => setHasOscars(event.target.checked)}/>
                <br/>
                <button type="submit">Create a movie</button>
            </form>
        </div>
        
    )
}

export default AddMovie