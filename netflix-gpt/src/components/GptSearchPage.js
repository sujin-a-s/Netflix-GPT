import React from 'react'
import GptSearchBar from './GptSearchBar'
import { NETFLIX_BACKGROUND } from '../utils/constant'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10' >
            <img
                src={NETFLIX_BACKGROUND}
                alt="backgroundimage"
            />
        </div>
        <GptSearchBar/>
    </div>
  )
}

export default GptSearchPage