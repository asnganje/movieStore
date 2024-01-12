import { createRandomSong } from "../data";

const SongPlayList = () => {
    const songs = ['black', 'red']
    const songAddHandler = (song) => {
       
    }

    const handleRemoveSong = (song)=> {

    }

    const renderedSongs = songs.map((song)=> {
        return(
            <li key={song} className="text-white">
                {song}
                <button onClick={handleRemoveSong}>
                    X
                </button>
            </li>
        )
    })

    return(
        <div>
            <div className="flex space-x-4">
                <h2 className="mt-3 text-white text-3xl">Songs Playlist</h2>
                <button className="bg-blue-500 text-xl p-3 text-white rounded-md">+Add song to playlist</button>
            </div>
        <ul>
            {renderedSongs}
        </ul>
        </div>
    )
}
export default SongPlayList;