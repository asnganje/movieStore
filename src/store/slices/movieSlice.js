import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        addMovie(state,action){
            state.push(action.payload) 
        },
        removeMovie(state,action){
            state = state.filter((el)=>el !== action.payload)
            return state
        },
        reset(state) {
            return []
        }
    }
})

export const moviesReducer = movieSlice.reducer;
export const {addMovie, updateMovie, reset, removeMovie} = movieSlice.actions;