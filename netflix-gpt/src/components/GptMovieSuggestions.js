import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const {movieResults , movieNames} = useSelector(store => store?.gpt);
 
  if(!movieNames) return null;

  return (
    <div className='  m-4 bg-black text-white bg-opacity-80'>
      <div className='-ml-10'>
        {movieNames.map((movieName,index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions