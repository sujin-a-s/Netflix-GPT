import React from 'react'
import Header from './Header.js'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';



const Browse = () => {
 
  
  useNowPlayingMovies();


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