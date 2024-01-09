import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-48 pr-4 hover:scale-110'>
        <img
            src={IMG_CDN_URL + posterPath}
            alt="Movie Card"
            className='rounded-xl '
        />
    </div>
  )
}

export default MovieCard