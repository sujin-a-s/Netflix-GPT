import React, { useEffect, useState } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { addUser } from '../utils/userSlice';

const Body = () => {

        const dispatch = useDispatch()
        
        const appRouter = createBrowserRouter([
            {
                path : "/",
                element : <Login/>
            },
            {
                path : "/browse",
                element : <Browse/>
            }
        ])

        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const {uid, email, displayName,photoURL} = user;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL:photoURL
                    }));
                    
                } else {
                    dispatch(removeUser());
                    
                }
              });
        },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body