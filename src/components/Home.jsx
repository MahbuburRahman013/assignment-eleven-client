import Banner from "./Banner";
import FaqSection from "./FaqSection";
import Feature from "./Feature";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
           <div className="bg-[#ECE3CE]"><FaqSection></FaqSection></div>
        </div>
    );
};

export default Home;