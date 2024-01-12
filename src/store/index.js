import { configureStore } from "@reduxjs/toolkit";
import {songsReducer} from './slices/songSlice'
import { moviesReducer } from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
})

export {store}
export * from './slices/movieSlice'
export * from './slices/songSlice'

