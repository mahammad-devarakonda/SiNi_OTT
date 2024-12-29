import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utills/constant";
import { addPopularMovies } from "../utills/movieSlice";
import { Popular_Movies } from '../utills/constant'


const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovie = useSelector((store) => store.movies.PopularMovie);

  const getPopularMovies = async () => {
    const data = await fetch(Popular_Movies, API_Options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, [])
}

export default usePopularMovies
