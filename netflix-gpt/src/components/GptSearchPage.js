import React from 'react'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BACKGROUND } from '../utils/constant'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <div>
        <div className='fixed -z-10' >
            <img
                src={NETFLIX_BACKGROUND}
                alt="backgroundimage"
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage