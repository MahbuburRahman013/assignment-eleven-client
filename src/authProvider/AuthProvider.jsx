import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../firebase.config";
import { useEffect } from "react";
import axios from "axios";

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

    

    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
              const userEmail = currentUser?.email || user.email;
              const email = {email: userEmail};
             setUser(currentUser);
             setIsLoading(false);
             
            
             if(currentUser){
                axios.post('http://localhost:5000/jwt', email , {withCredentials:true})
                .then(res=> {
                    console.log(res.data)
                })
             }else{
                  axios.post('http://localhost:5000/logout', email, {withCredentials: true})
                  .then(res=>{
                      console.log(res.data)
                  })
             }
         }) 

         return()=>{
            unSubscribe();
         }

    },[user?.email])



const authInfo ={
     createUser,
     isLoading,
     user,
     signInUser,
     googleLogin
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;