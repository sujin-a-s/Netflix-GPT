import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name: "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggleGptsearchView : (state) => {
        state.showGptSearch = !state.showGptSearch; 
        }
    }

    
})

export const{toggleGptsearchView} = gptslice.actions;
export default gptslice.reducer;