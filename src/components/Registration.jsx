import { useState } from "react";

const Registration = () => {
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegistration = () => {
      // Handle registration logic, e.g., making an API request to register the user.
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
  
          <div className="mb-4">
            <label className="text-gray-600 text-sm block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={handleRegistration}
          >
            Register
          </button>
        </div>
      </div>
    );
  };

export default Registration;