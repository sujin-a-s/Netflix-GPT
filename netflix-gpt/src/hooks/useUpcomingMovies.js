import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUpcomingMovies} from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addUpcomingMovies(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;