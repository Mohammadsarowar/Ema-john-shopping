import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.confug';
export const authProvider = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const Context = ({children}) => {
   const [user,setUser] = useState(null)
   const [loading,setLoading] = useState(true)
   const createUser = (email,password) =>{
       setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }
   const loginWithGoogle = (email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
   }
   const singInWith = (auth,provider)=>{
    return signInWithPopup(auth,provider)

   }
   const singOutWithPassword =()=>{
       return signOut(auth)
   }
    useEffect(()=>{
        onAuthStateChanged(auth,createUser=>{
            setUser(createUser)
            setLoading(false)
          return () =>{
            return unsubscribe()
          }
        })
    },[])
    const authInfo = {
        user,
        createUser,
        singInWith,
        loginWithGoogle,
        singOutWithPassword,
        loading
    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default Context;