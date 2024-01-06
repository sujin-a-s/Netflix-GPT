import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
          
            <input
             className='p-4 m-4 col-span-9'
             type="text"
             placeholder='What movies would you want to watch'
             />

            <button className='col-span-3 p-4 m-4 bg-red-700 text-white rounded-md'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar