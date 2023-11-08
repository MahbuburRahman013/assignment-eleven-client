import { useState } from "react";
import useAuth from "../hooks/useAuth";
import {useLocation , useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signInUser, googleLogin} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
        e.preventDefault();
       signInUser(email,password)
       .then(result=>{
        
           if(result.user){
            toast.success('login successfully!')
            location.state && navigate(location.state);
            
              
           }
       })
       .catch(error=>{
        
            toast.error(error.message);
       })
  };

  

  const handleGoogleLogin = () => {
        googleLogin()
        .then(result=>{
           if(result.user){
            toast.success('sing in google successfully')
            location.state && navigate(location.state);
            
           }
        })
        .catch(error=>{
            toast.error(error.message)
        })
  }; 

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://i.ibb.co/MGWmD8c/images-1.jpg')] bg-cover bg-no-repeat">
      
      <div className="backdrop-blur-sm bg-white/50 p-8 rounded-lg shadow-lg lg:w-96">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-800 mb-4">Login</h2>
        <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="text-gray-600 text-sm block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border backdrop-blur-sm bg-white/50 border-gray-300 rounded-md"
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
            className="w-full px-3 py-2 border backdrop-blur-sm bg-white/50 border-gray-300 rounded-md"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
        </form>
        <button
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;