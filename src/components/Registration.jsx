import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

const Registration = () => {
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {createUser} = useAuth();
  
    const handleRegistration = (e) => {
        e.preventDefault();


        if(!/^(?=.*[A-Z])(?=.*\W).{6,}/.test(password)){
          return alert('Invalid Password!!')
       }


         createUser(email,password)
         .then(result=>{
              if(result.user){
                updateProfile(auth.currentUser, {
                  displayName:name,
                  photoURL:photoURL,
                })
                .then(()=>{
                   alert('user create')
                })
                .then(error=>{
                      alert(error.message)
                })
              }
         })
         .catch(error=>{
            alert(error.message)
         })
      
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('https://i.ibb.co/MGWmD8c/images-1.jpg')] bg-cover bg-no-repeat">
        <form onSubmit={handleRegistration}>
        <div className="backdrop-blur-sm bg-white/50 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-800">Register</h2>
  
          <div className="mb-4">
            <label className="text-gray-600 text-sm block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              required
              id="name"
              className="w-full px-3 py-2 border border-gray-300 backdrop-blur-md bg-white/50 rounded-md"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-600 text-sm block mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              required
              className="w-full px-3 py-2 border backdrop-blur-md bg-white/50 border-gray-300 rounded-md"
              placeholder="Your Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-600 text-sm block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border backdrop-blur-md bg-white/50 border-gray-300 rounded-md"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-600 text-sm block mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border backdrop-blur-md bg-white/50 border-gray-300 rounded-md"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Register
          </button>
        </div>
        </form>
      </div>
    );
  };

export default Registration;