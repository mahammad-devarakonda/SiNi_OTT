import { useState, useRef, useEffect } from 'react';
import { API_Options } from '../utills/constant';

const useMovieSearch = () => {
  const searchText = useRef('');
  const [movie, setMovies] = useState([]);
  const [error,setError]=useState('')

  const handleSearchMovie = async () => {
    const query = searchText.current.value;
    if (query.trim() === '') return "Please enter Movie Name ";
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    try {
      const response = await fetch(url, API_Options);
      console.log(response)
      let { results } = await response.json();
      console.log(results);
      
      setMovies(results);
      if(results.length===0){
        setError("No Movie Found")
      }
    } catch (error) {
      setError("An error occurred while fetching movies." +error);
    }
  };

  useEffect(() => {
    handleSearchMovie();
  }, []);

  return { searchText, movie, handleSearchMovie,error };
};

export default useMovieSearch;
