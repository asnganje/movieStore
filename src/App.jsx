import { useDispatch } from "react-redux";
import SongPlayList from "./components/SongPlayList";
import MoviePlayList from "./components/moviePlayList";
import { reset} from "./store/slices/movieSlice";
const App = () => {

    const dispatch = useDispatch()
    const resetHandler = () => {
        dispatch(reset())
    }
    return(
        <div className="flex flex-col bg-gray-700 rounded-md mx-[25vh] p-5 gap-5 font-mono items-center h-[90vh] m-5">
            <button onClick={resetHandler} className="bg-red-600 text-2xl text-white p-2 rounded-md">Reset both playlists</button>
            <hr />
            <MoviePlayList className = ""/>
            <hr />
            <SongPlayList />
        </div>
    )
}
export default App;