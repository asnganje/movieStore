import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: {data: []},
    reducers: {
        addSong(state,action){
            state.data.push(action.payload)
        },
        removeSong(state, action){
            state.data = state.data.filter((el)=>el !== action.payload)
        },
        resetS(state) {
            state.data = []
        }
    }
})

export const songsReducer = songSlice.reducer;
export const {addSong, removeSong, resetS} = songSlice.actions;