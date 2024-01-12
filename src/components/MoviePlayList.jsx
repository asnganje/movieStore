import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie} from "../store/slices/movieSlice";

const MoviePlayList = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.movies)

    const movieAddHandler = (movie) => {
       dispatch(addMovie(movie))
    }

    const handleRemoveMovie = (movie)=> {
        dispatch(removeMovie(movie))
    }

    const renderedMovies = data.map((movie)=> {
        return(
            <li key={movie} className="flex italic justify-between text-white p-1 border">
                {movie}
                <button className="text-white bg-red-600 p-1 w-10 hover:text-red-400 text-2xl"  onClick={()=>handleRemoveMovie(movie)}>
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
            <ul className="mt-2">
                {renderedMovies}
            </ul>
        </div>
    )
}
export default MoviePlayList;