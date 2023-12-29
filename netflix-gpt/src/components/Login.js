import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSigninForm,setIsSigninForm] = useState(true)
    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm)
    }
  return (


    <div>
        <Header/>
        <div className='absolute' >
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="backgroundimage"
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-2xl py-4'>
                {isSigninForm ? "Sign-In":"Sign-Up"}
            </h1>
            {!isSigninForm && <input 
                type="text" 
                placeholder='Name' 
                className='p-4 my-4 w-full bg-slate-700'>
            </input>}
            <input 
                type="text" 
                placeholder='Email Address' 
                className='p-4 my-4 w-full bg-slate-700'>
            </input>
            <input 
                type="password" 
                placeholder='Password' 
                className='p-4 my-4  w-full bg-slate-700'>
            </input>
            <button className='p-4 my-6 w-full bg-red-600'>{isSigninForm ? "Sign-In":"Sign-Up"}</button>
            <p  className='my-4 mx-11 cursor-pointer' 
                onClick={toggleSigninForm}>{isSigninForm ? "New to Netflix? Sign Up Now":"Already registered. Sign in now"}
            </p>
        </form>
    </div>
  )
}

export default Login