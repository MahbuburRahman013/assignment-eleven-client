import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 border-t-4 border-red-800 text-white py-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="footer-logo">
                        <img src="https://i.ibb.co/wrq6wjT/181620731-online-course-with-small-group-coaching-for-study-skills-logo-design-1-removebg-preview.png" alt="Your Website Logo" className="w-36" />
                        <p className="uppercase text-3xl pl-5 font-bold text-[#7495b4]">Study<span className="text-[#f9af32]">Hub</span></p>
                    </div>
                    <div className="footer-navigation ">
                        <ul className="flex mr-24 gap-8">
                            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to="/all-assignment" className="hover:text-blue-500">All Assignment</Link></li>
                            <li><Link to="/create-assignment" className="hover:text-blue-500">Create Assignment</Link></li>
                            <li><Link to="/my-assignment" className="hover:text-blue-500">My Assignment</Link></li>
                            <li><Link to="/submitted-assignment" className="hover:text-blue-500">Submitted Assignment</Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul className="flex space-x-4">
                            <li><a href="#"><i className="fab fa-facebook text-xl hover:text-blue-500"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter text-xl hover:text-blue-500"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin text-xl hover:text-blue-500"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram text-xl hover:text-blue-500"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">&copy; 2023 Your Website Name. All rights reserved.</p>
                    <p className="text-sm"><Link className="hover:text-blue-500">Privacy Policy</Link> | <Link  className="hover:text-blue-500">Terms of Service</Link></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;