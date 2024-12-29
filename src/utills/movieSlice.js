import { createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies: null,
        TrailerVideo: null,
        PopularMovie: null,
        DiscoverMovies: null,
        UpComingMovies: null,
        AiringMovies:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.TrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovie = action.payload;
        },
        addDiscoverMovies: (state, action) => {
            state.DiscoverMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.UpComingMovies = action.payload;
        },
        addAiringToday:(state,action)=>{
            state.AiringMovies=action.payload
        }
    },
  
});
export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addPopularMovies,
    addDiscoverMovies,
    addUpComingMovies,
    addAiringToday,
} = movieSlice.actions;
export default movieSlice.reducer;