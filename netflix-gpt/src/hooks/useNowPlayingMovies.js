import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
      const json = await data.json();
      // console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;