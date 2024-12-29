import { useEffect } from "react";
import { API_Options, Upcoming_Movies } from "../utills/constant"
import { useDispatch } from "react-redux"
import { addUpComingMovies } from "../utills/movieSlice";

const useUpcoming = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(Upcoming_Movies, API_Options)
        const json = await data.json()
        dispatch(addUpComingMovies(json.results))
    }

    useEffect(() => {
       getUpcomingMovies()
    }, [])
}

export default useUpcoming;