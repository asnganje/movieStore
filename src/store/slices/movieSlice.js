import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {data: []},
    reducers: {
        addMovie(state,action){
            state.data.push(action.payload) 
        },
        updateMovie(){},
        removeMovie(state,action){
            state.data = state.data.filter((el)=>el !== action.payload)
        },
        resetM(state) {
            state.data = []
        }
    }
})

export const moviesReducer = movieSlice.reducer;
export const {addMovie, updateMovie, resetM, removeMovie} = movieSlice.actions;