import { useEffect, useState } from 'react';
import { API_Options } from "../utills/constant";
import { useNavigate } from 'react-router-dom';

const useFullMovie = (movieID) => {
  const [Movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);  
  const navigate =useNavigate();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_Options
      );

      const json = await response.json();

      // Check if results exist and is an array
      if (json.results && Array.isArray(json.results)) {
        let filterData = json.results.filter(
          (video) => video.type === "Trailer" && video.size >= 1000
        );

        if (filterData.length === 0) {
          filterData = json.results.filter(
            (video) => (video.type === "Teaser" || video.type === "Trailer")  && video.size >= 1000
          );
        }

        if (filterData.length > 0) {
          setMovie(filterData[0].key);
        } else {
          console.warn("No valid trailer or teaser found for this movie.");
        }
      } else {
        console.error("No results found in API response");
      }
    } catch (error) {
      navigate('/error')
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  useEffect(() => {
    if (movieID) {
      getMovieVideos();
    }
  }, [movieID]);

  return { Movie, loading };  // Return loading state as well
};

export default useFullMovie;
