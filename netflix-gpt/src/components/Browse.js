import React from 'react'
import Header from './Header.js'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addNowPlayingMovies } from "../utils/movieslice"
import { API_OPTIONS } from '../utils/constant.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';



const Browse = () => {
 
  
  const dispatch = useDispatch()
  
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
    const json = await data.json();
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getNowPlayingMovies();
  },[])


  return (

    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/> 
    {
      /*
        main container
          - videoBackground
          - video title

        SecondaryContainer
          - movielists * n
            - cards * n
       */
    }

    </div>
  )
}

export default Browse