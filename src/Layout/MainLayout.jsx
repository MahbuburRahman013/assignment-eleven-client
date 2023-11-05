import Navbar from "../components/Navbar";
import Logo from "../logo/Logo";
import {Outlet} from 'react-router-dom'
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;