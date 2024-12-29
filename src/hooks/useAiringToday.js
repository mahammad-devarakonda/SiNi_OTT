import { API_Options } from '../utills/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addAiringToday} from '../utills/movieSlice'
import { AiringToday } from '../utills/constant'
const useAiringToday = () => {

    const dispatch = useDispatch();

    const getAiringMovies = async () => {
        const data = await fetch(AiringToday, API_Options);
        const json = await data.json();
        dispatch(addAiringToday(json.results))
      }

       useEffect(() => {
         getAiringMovies();
       }, []);
  
}

export default useAiringToday
