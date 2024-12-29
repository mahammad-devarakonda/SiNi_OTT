import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:[],
    moviesResults:[],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    AISuggestedMovies:(state,action)=>{
      const{movieNames,moviesResults}=action.payload
      state.movieNames= action.payload;
      state.moviesResults= action.payload;
    },
    
  },
});

export const { toggleGptSearchView,AISuggestedMovies} = gptSlice.actions;

export default gptSlice.reducer;