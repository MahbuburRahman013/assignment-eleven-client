import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase.config";
import { useEffect } from "react";


export const ContextProvider = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true);

    const createUser = (email,password) =>{
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signInUser = (email,password) =>{
        isLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
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
     logOutUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;