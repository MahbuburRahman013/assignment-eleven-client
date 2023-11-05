import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className=" bg-gray-800 border-b-2 border-red-800">
            <div className="container mx-auto py-2 justify-between flex items-center">
                <div className="flex">
                    <p className="uppercase text-3xl pl-5 font-bold text-[#7495b4]">Study<span className="text-[#f9af32]">Hub</span></p>
                    <img className="w-20" src="https://i.ibb.co/wrq6wjT/181620731-online-course-with-small-group-coaching-for-study-skills-logo-design-1-removebg-preview.png" alt="" />
                </div>
                <div className="text-white">
                    <Link to='/registration' className="inline-block px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
                        Registration
                    </Link>
                    <Link to='/login' className="inline-block mx-5 px-4 py-1 text-white bg-[#f9af32] rounded hover:bg-orange-700 transition duration-300 ease-in-out">
                       Login
                    </Link>
                    
                </div>
            </div>

        </div>
    );
};

export default Logo;