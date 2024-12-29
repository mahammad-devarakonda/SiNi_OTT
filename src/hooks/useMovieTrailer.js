import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utills/constant";
import { addTrailerVideo} from "../utills/movieSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.TrailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieID +
      "/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;

