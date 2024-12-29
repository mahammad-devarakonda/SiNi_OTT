import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utills/constant";
import { addNowPlayingMovies } from "../utills/movieSlice";
import { Now_Playing_Movies } from "../utills/constant";
import { useNavigate } from "react-router-dom";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const NowPlayingMovies = useSelector(store => store.movies.NowPlayingMovies);
    const navigate=useNavigate()
    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(Now_Playing_Movies, API_Options);
            if (!data.ok) {
                navigate("/error");
            }
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            navigate("/error");
        }
    };

    useEffect(() => {
        if (!NowPlayingMovies) {
            getNowPlayingMovies();
        }
    }, [NowPlayingMovies, dispatch]); // Add NowPlayingMovies to dependencies
};

export default useNowPlayingMovies;
