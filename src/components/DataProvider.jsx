import { createContext, useEffect, useState } from "react";
export const parentContext=createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../components/Authentication/firebase_config"


const DataProvider = ({children}) => {
const googleProvider=new GoogleAuthProvider

// user handle
const[user,setUser]=useState(null)
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentuser=>{
        setUser(currentuser)
        
    })
    return unsubscribe
  },[])
// log in handle.
const googleLogin=()=>{
return signInWithPopup(auth,googleProvider)
}

// email signup

const emailSignup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// email signout handel

const emailLogin=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)

}

// logout handle
const logout=()=>{
   return signOut(auth)
}

// dark handel.
 
const[dark,setDark]=useState(false)


const darkHandle=()=>{
    setDark(!dark)
}

console.log(dark)


    const data={googleLogin,user,logout,emailSignup,emailLogin,dark,darkHandle}
    return (
        <div>
            <parentContext.Provider value={data}>
                {children}
            </parentContext.Provider>
        </div>
    );
};

export default DataProvider;