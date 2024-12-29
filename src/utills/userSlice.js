import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            userInfo: null,
            wishlist: [],
        },
        reducers: {
            addUser: (state, action) => {
                state.userInfo = action.payload;
            },
            removeUser: (state) => {
                state.userInfo = null;
                state.wishlist = [];
            },
            addWishListMovie: (state, action) => {
                state.wishlist.push(action.payload);
            },
            removeWishListMovie: (state, action) => {
                state.wishlist = state.wishlist.filter(
                    movie => movie.id !== action.payload.id
                );
            },

        }
    }
)

export const { userInfo,addUser, removeUser, addWishListMovie, removeWishListMovie} = userSlice.actions

export default userSlice.reducer;