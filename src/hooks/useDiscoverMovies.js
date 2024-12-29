import { API_Options } from '../utills/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addDiscoverMovies} from '../utills/movieSlice'
import { Discover_Movies } from '../utills/constant'
const useDiscoverMovies = () => {

    const dispatch = useDispatch();

    const getDiscoverMovies = async () => {
        const data = await fetch(Discover_Movies, API_Options);
        const json = await data.json();
        dispatch(addDiscoverMovies(json.results))
      }

       useEffect(() => {
         getDiscoverMovies();
       }, []);
  
}

export default useDiscoverMovies
