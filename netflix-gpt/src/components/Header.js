import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'; 
import { signOut } from 'firebase/auth'; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptsearchView } from '../utils/gptslice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configslice';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName,photoURL} = user;
            dispatch(
                addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL:photoURL
            }));
            navigate("/browse")
            
        } else {
            dispatch(removeUser());
            navigate("/")

            
        }
      });

      return () => unsubscribe();
},[])
  



  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/Error")
      });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptsearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img
            className='w-44'
            src={LOGO}
            alt="logo"
        />

        
        {user && (
          <div className='flex'>

            { showGptSearch && <select onChange={handleLanguageChange} className=' bg-gray-900 px-4 mx-4 my-4  text-white'>
              {
                SUPPORTED_LANGUAGES.map(
                (lang) => (<option key ={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                )
              }

            </select>}
  
            <botton onClick={handleGptSearchClick} className="py-2 cursor-pointer px-4 mx-4 my-4 rounded-sm bg-red-700 border-spacing-10 text-white"> {showGptSearch? "Home Page" : "GPT Search"}</botton>

            <img
                className='h-10 my-4'
                src={user?.photoURL}
                alt="usericon"
                />

            <button onClick={handleSignOut} className='py-2 cursor-pointer px-4 mx-4 my-4 rounded-sm bg-red-700 text-white'>Sign Out</button>
          </div>)
        }
    </div>
  )
}

export default Header