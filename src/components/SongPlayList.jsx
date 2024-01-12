import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store/slices/songSlice";

const SongPlayList = () => {
    const dispatch = useDispatch()
    const data = useSelector((store)=>store.songs) 
    const songAddHandler = (song) => {
       dispatch(addSong(song))
    }

    const handleRemoveSong = (song)=> {
        dispatch(removeSong(song))
    }

    const renderedSongs = data.map((song)=> {
        return(
            <li key={song} className="text-white italic p-1 border flex justify-between">
                {song}
                <button className="text-white  bg-red-600 p-1 w-10 hover:text-red-400 text-2xl" onClick={()=>handleRemoveSong(song)}>
                    X
                </button>
            </li>
        )
    })

    return(
        <div>
            <div className="flex space-x-4">
                <h2 className="mt-3 text-white text-3xl">Songs Playlist</h2>
                <button onClick={()=>songAddHandler(createRandomSong())} className="bg-blue-500 text-xl p-3 text-white rounded-md">+Add song to playlist</button>
            </div>
        <ul className="mt-2">
            {renderedSongs}
        </ul>
        </div>
    )
}
export default SongPlayList;