import React from 'react'
import MovieCard  from './MovieCards'

const MovieList = ({title,movies}) => {
    const movieArray = movies || []
  return (
    <div className='pl-24 '>
      <h1 className=' text-lg md:text-3xl text-white py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movieArray?.map(movie => (<MovieCard key={movie.id} posterPath={movie?.poster_path}/>))}
                
            </div>
        </div>
    </div>
  )
} 

export default MovieList