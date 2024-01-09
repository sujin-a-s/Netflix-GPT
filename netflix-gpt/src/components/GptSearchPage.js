import React from 'react'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BACKGROUND } from '../utils/constant'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10' >
        <img
            className=''
            src={NETFLIX_BACKGROUND}
            alt="backgroundimage"
        />
    </div>
    <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearchPage