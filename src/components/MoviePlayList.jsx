import { createRandomMovie } from "../data";

const MoviePlayList = () => {
    const movies = ['black', 'red']
    const movieAddHandler = (movie) => {
       
    }

    const handleRemoveMovie = (movie)=> {

    }

    const renderedMovies = movies.map((movie)=> {
        return(
            <li key={movie} className="text-white">
                {movie}
                <button onClick={handleRemoveMovie}>
                    X
                </button>
            </li>
        )
    })

    return(
        <div>
            <div  className="flex space-x-4">
                <h2 className="mt-3 text-white text-3xl">Movie Playlist</h2>
                <button onClick={()=>movieAddHandler( createRandomMovie())}  className="bg-blue-500 text-xl p-3 text-white rounded-md">+Add movie to playlist</button>
            </div>
            <ul>
                {renderedMovies}
            </ul>
        </div>
    )
}
export default MoviePlayList;