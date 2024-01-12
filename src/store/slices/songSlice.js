import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: [],
    reducers: {
        addSong(state,action){
            state.push(action.payload)
        },
        removeSong(state, action){
            state = state.filter((el)=>el !== action.payload)
            return state
        },
    },
    extraReducers(builder){
        builder.addCase('movies/reset', (state,action)=> {
            return []
        })
    }
})

export const songsReducer = songSlice.reducer;
export const {addSong, removeSong, resetS} = songSlice.actions;