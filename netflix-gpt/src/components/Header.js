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




const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user);

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

  return (
    <div className='absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img
            className='w-44'
            src={LOGO}
            alt="logo"
        />

        
        {user && (<div className='flex'>
          <img
              className='h-10 my-4'
              src={user?.photoURL}
              alt="usericon"
              />
          <button onClick={handleSignOut} className=' text-red-600 font-bold text-xl mx-3 p-1  border-white'>[Sign Out]</button>
        </div>)}
    </div>
  )
}

export default Header