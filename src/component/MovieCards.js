import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOVIE_IMG_CDN_URL } from '../utills/constant';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import CryptoJS from 'crypto-js';

const MovieCards = ({ poster, onPlusClick, isFavorite, movieId, movieName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const encryptedMovieId = CryptoJS.AES.encrypt(movieId.toString(), 'secret_key').toString();
    navigate(`/movie/${encodeURIComponent(encryptedMovieId)}`);
  };

  return (
    <div className="relative w-36 md:w-48 pr-4 hover:scale-105 hover:shadow-lg" onClick={handleClick}>
      {poster ? (
        <img className='max-w-full h-auto' src={MOVIE_IMG_CDN_URL + poster} alt='movie_poster' />
      ) : (
        // Shimmer effect if poster is not available
        <div className="relative flex items-center justify-center w-full h-48 bg-gray-300 animate-pulse">
          <p className="text-white text-center">{movieName}</p>
        </div>
      )}
      <button
        onClick={onPlusClick}
        className="absolute top-50 right-4 bottom-0 m-4 p-1 bg-transparent rounded-full text-3xl text-white focus:outline-none"
        aria-label="Add"
      >
        {isFavorite ? <RiHeart3Fill /> : <RiHeart3Line />}
      </button>
    </div>
  );
};

export default MovieCards;
