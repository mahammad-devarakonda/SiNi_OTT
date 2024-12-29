import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishListMovie, addWishListMovie } from "../utills/userSlice";
import MovieCards from './MovieCards';
import axios from 'axios';

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const wishlist = useSelector((state) => state.user.wishlist || []);
  const fireBaseURL = "https://netflix-c3929-default-rtdb.asia-southeast1.firebasedatabase.app/";

  const postToFirebase = async (userId, movie) => {
    try {
      await axios.post(`${fireBaseURL}/wishlist`, {
        movie: movie,
      });
    } catch (error) {
      alert('An error occurred while adding the movie to your wishlist. Please try again.');
    }
  };

  const handleToggleWishlist = (movie) => {
    if (isInWishlist(movie)) {
      dispatch(removeWishListMovie(movie));
    } else {
      dispatch(addWishListMovie(movie));
    }
  };

  const isInWishlist = (movie) => {
    return wishlist.some(wishMovie => wishMovie.id === movie.id);
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
        <div className="flex gap-2">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCards
                key={movie.id}
                poster={movie.poster_path}
                movieName={movie.original_title}
                onPlusClick={() => handleToggleWishlist(movie)}
                isFavorite={isInWishlist(movie)}
                movieId={movie.id}
              />
            ))
          ) : (
            // Shimmer effect when no movies are loaded yet
            Array(20).fill().map((_, index) => (
              <div key={index} className="flex w-36 overflow-x-scroll no-scrollbar">
                <div className="relative flex items-center justify-center w-full h-48 bg-gray-300 animate-pulse">
                  <p className="text-white text-center">Loading...</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
