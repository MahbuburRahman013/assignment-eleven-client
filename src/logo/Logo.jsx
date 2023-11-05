import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Logo = () => {
    const { user , logOutUser} = useAuth()
    console.log(user);
    const handleLogOut =()=>{
        logOutUser().then(()=>{
            alert('logOut successfully!')
        })
        .catch(err=>{
            alert(err)
        })
    }

    return (
        <div className=" bg-gray-800 border-b-2 border-red-800">
            <div className="container mx-auto py-2 justify-between flex items-center">
                <div className="flex">
                    <p className="uppercase text-3xl pl-5 font-bold text-[#7495b4]">Study<span className="text-[#f9af32]">Hub</span></p>
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
                            user ?<button onClick={handleLogOut} className="inline-block mx-5 px-4 py-1 text-gray-100 bg-[#f9af32] rounded hover:bg-orange-700 transition duration-300 ease-in-out">LogOut</button>:

                                <Link to='/login' className="inline-block mx-5 px-4 py-1 text-gray-100 bg-[#f9af32] rounded hover:bg-orange-700 transition duration-300 ease-in-out">
                                    Login
                                </Link>
                                
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Logo;