import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./configSlice"


const appStore = configureStore({
    reducer: {
        // Use userReducer here
        user: userReducer,
        //movies Reducres
        movies:moviesReducer,
        //chatGPT
        gpt:gptReducer,
        //language Reducer
        config:languageReducer,
    },
});

export default appStore;
