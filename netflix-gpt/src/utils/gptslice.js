import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false,
        movieNames : false,
        movieResults : false

    },
    reducers : {
        toggleGptsearchView : (state) => {
        state.showGptSearch = !state.showGptSearch; 
        },
        addGptMovieResults : (state,action) => {
            const{movieNames,movieResults} = action.payload;
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }

    
})

export const{toggleGptsearchView,addGptMovieResults} = gptslice.actions;
export default gptslice.reducer;