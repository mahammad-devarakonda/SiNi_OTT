import React, { useRef, useState } from 'react'
import { geminiAIKey } from '../utills/constant'
import { GoogleGenerativeAI } from '@google/generative-ai'
import lang from '../utills/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_Options } from '../utills/constant'
import { AISuggestedMovies } from '../utills/gptSlice'
import MovieCards from './MovieCards';

const GptSearchPage = () => {
  const language = useSelector((state) => state.config.lang)
  const searchText = useRef('')
  const [text, setText] = useState('')
  const [searchedValue, setSearchedValue] = useState('')
  const [loading, setLoading] = useState(false); // Loading state
  const dispatch = useDispatch();
  const gptMoviesShow = useSelector((state) => state.gpt.moviesResults.movieResult || []);

  const searchMovies = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_Options)
    const json = await data.json();
    return (json.results);
  }

  const handleGPTclick = async () => {
    setLoading(true); // Start loading when GPT button is clicked
    let message = searchText.current.value.trim();

    let query = "Act as a movie recommendation system and suggest movies for the query " +
      message +
      ". Only give me the names of 5 movies don't mention years. Separate each movie's details with a line break. example : movie1 , movie2 , movie3 , movie4 , movie5 ";

    const genAI = new GoogleGenerativeAI(geminiAIKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(query);
    const response = result.response;
    const text = response.text();
    const moviesName = text.split("\n").map(eachmovie => eachmovie.trim());
    setText(text);
    setSearchedValue(message);
    searchText.current.value = '';

    const moviesPromises = moviesName.map(async (movie) => {
      const results = await searchMovies(movie);
      return results;
    });

    const moviesResults = await Promise.all(moviesPromises);
    dispatch(AISuggestedMovies({ moviesName: moviesName, movieResult: moviesResults }));
    setLoading(false); // Stop loading after fetching
  }

  return (
    <div className='gap-3 w-screen '>
      <div className='w-1/2 ml-64'>
        <form className='p-10 mt-20 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type='text' className='text-black py-2 px-4 border border-gray-300 rounded-lg rounded-tr-none rounded-br-none placeholder-gray-500 col-span-9 ' placeholder={lang[language].gptSearchPlaceholde} />
          <button onClick={handleGPTclick} className=' bg-red-600 text-white font-bold py-2 px-4 rounded-lg rounded-tl-none rounded-bl-none shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 border-none cursor-pointer col-span-3'>{lang[language].search}</button>
        </form>
        {searchedValue && <p className="text-lg font-medium text-center mt-4 text-white bg-black bg-opacity-50 p-2">Searched for: {searchedValue}</p>}
      </div>

      <div className="p-16 pt-0 m-16 bg-black bg-opacity-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            Array(20).fill(0).map((_, index) => (
              <div key={index} className="animate-pulse space-y-4">
                <div className="bg-gray-300 rounded-lg h-60 w-full"></div>
              </div>
            ))
          ) : (
            gptMoviesShow && gptMoviesShow.map((subArray, index) => (
              <React.Fragment key={index}>
                {subArray.map(movie => (
                  <MovieCards
                    key={movie.id}
                    poster={movie.poster_path}
                    movieId={movie.id}
                  />
                ))}
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default GptSearchPage;
