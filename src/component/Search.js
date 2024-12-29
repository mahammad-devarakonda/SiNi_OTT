import React from 'react'
import { BG_IMG } from '../utills/constant'
import { FaSearch } from 'react-icons/fa';
import MovieCards from './MovieCards';
import useMovieSearch from '../hooks/useMovieSearch';
const Search = () => {
    const { searchText, movie, handleSearchMovie, error } = useMovieSearch();

    return (
        <div className='flex flex-col item-center '>
            <div className="fixed top-0 left-0 right-0 bottom-0 -z-20">
                <img className="h-full w-full object-cover" src={BG_IMG} alt="BG-IMG" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="flex justify-center items-center h-full z-10">
                <div className="grid grid-cols-12 gap-0 mt-10">
                    <input
                        ref={searchText}
                        type="text"
                        className="col-span-9 text-black py-2 sm:px-6 border border-gray-300 rounded-l-lg placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-md"
                        placeholder="Search for a movie..."
                    />
                    <button onClick={handleSearchMovie}
                        className="col-span-3 bg-red-600 text-white font-bold py-2 px-6 rounded-r-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border-none cursor-pointer"
                    >
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div className='text-white text-xl item-center'>{error}</div>
            <div className='flex flex-row gap-3 mt-20 m-6'>
                {movie?.map((movie) => {
                    return (
                        <>
                            <MovieCards
                                key={movie.id}
                                poster={movie.poster_path}
                                movieId={movie.id}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default Search
