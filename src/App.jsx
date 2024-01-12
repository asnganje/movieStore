import { useDispatch } from "react-redux";
import SongPlayList from "./components/SongPlayList";
import MoviePlayList from "./components/moviePlayList";
import { resetM} from "./store/slices/movieSlice";
import {resetS} from './store/slices/songSlice'
const App = () => {

    const dispatch = useDispatch()
    const resetHandler = () => {
        dispatch(resetM())
        dispatch(resetS())
    }
    return(
        <div className="flex flex-col shadow-lg bg-gray-500 rounded-md mx-[25vh] p-5 gap-5 font-mono items-center h-[90vh] m-5">
            <button onClick={resetHandler} className="bg-red-400 text-2xl text-white p-2 rounded-md">Reset both playlists</button>
            <hr />
            <MoviePlayList className = ""/>
            <hr />
            <SongPlayList />
        </div>
    )
}
export default App;