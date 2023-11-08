import { auth } from "../firebase.config";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { ContextProvider } from "../authProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';



const Logo = () => {
   const {user} = useContext(ContextProvider)
    
    const handleLogOut =()=>{
        
            signOut(auth)
            .then(()=>{
            toast.success('logout successfully!')
        })
        .catch(err=>{
            toast.error(err)
        })
    }

    return (
        <div className=" bg-gray-800 border-b-2 border-red-800">
            <div className="container mx-auto py-2 justify-between flex items-center">
                <div className="flex-col lg:flex-row flex">
                    <p className="uppercase lg:text-3xl pl-5 font-bold text-[#7495b4]">Study<span className="text-[#f9af32]">Hub</span></p>
                    <img className="w-20" src="https://i.ibb.co/wrq6wjT/181620731-online-course-with-small-group-coaching-for-study-skills-logo-design-1-removebg-preview.png" alt="" />
                </div>
                <div className="flex items-center">
                    <div className="">
                        {
                            user ? <img title={user?.displayName} className="w-8  border-2 border-gray-500 rounded-full" src={user?.photoURL} alt="" /> :

                                <Link to='/registration' className="inline-block px-4 py-1 text-gray-100 bg-blue-500 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
                                    Registration
                                </Link>
                        }
                    </div>

                    <div>
                        {
                            user ?<button onClick={handleLogOut} className="block lg:mx-5 lg:px-4 py-1 text-gray-100 bg-[#f9af32] rounded hover:bg-orange-700 transition duration-300 ease-in-out">LogOut</button>:

                                <Link to='/login' className="block mx-5 lg:px-4 py-1 text-gray-100 bg-[#f9af32] rounded hover:bg-orange-700 transition duration-300 ease-in-out">
                                    Login
                                </Link>
                                
                        }
                    </div>

                </div>
                <Toaster></Toaster>
            </div>

        </div>
    );
};

export default Logo;