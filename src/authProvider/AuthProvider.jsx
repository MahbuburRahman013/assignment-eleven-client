import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../firebase.config";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();
export const ContextProvider = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true);

    const createUser = (email,password) =>{
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signInUser = (email,password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, provider);
    }

    const logOutUser = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser);
             setIsLoading(false);
         }) 

         return()=>{
            unSubscribe();
         }

    },[])



const authInfo ={
     createUser,
     isLoading,
     user,
     signInUser,
     logOutUser,
     googleLogin
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;