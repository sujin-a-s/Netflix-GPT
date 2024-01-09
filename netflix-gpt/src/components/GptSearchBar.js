import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResults } from '../utils/gptslice'

const GptSearchBar = () => {
  
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null);

  //searrch movie in tmdb database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    return json.results;
  }
  
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value)

    //make an api call to gtp api amd get mpvie results

    const getQuery = "Act as a Movie Recommendation System and suggest some movies for the query"+
    searchText.current.value+
    ". ony give me names of 5 movies , comma seperated like the example result given ahead. Example Result: ghill,bigil,shajahan,mersel,thirumalai";

    const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: getQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices?.[0]?.message?.content) {
      console.error('Error in GPT API response');
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    //vasoolraja mbbs ,pammal k samandham,michel madana kamarajan
    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    //changes into an array containing five  strings 

    // for each movie i will search TMDB API

    const promiseArray = gptMovies.map(
      (movie) => searchMovieTMDB(movie)
    )

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults)
    //[Promise,Promise,Promise,Promise,Promise]
    dispatch(addGptMovieResults({movienames : gptMovies , movieresults : tmdbResults}))

  }
  

  
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
          
            <input
             ref = {searchText}
             className='p-4 m-4 col-span-9 '
             type="text"
             placeholder={lang[langKey].gptSearchPlaceholder}
             />

            <button onClick={handleGptSearchClick} className='col-span-3 p-4 m-4 bg-red-700 text-white rounded-md hover:scale-105 hover:bg-red-600'>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}


export default GptSearchBar