import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecom from "../ChefRecom/ChefRecom";
import ChefService from "../ChefService/ChefService";
import PhoneCall from "../PhoneCall/PhoneCall";
import PopularMenus from "../PopularMenu/PopularMenus";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenus></PopularMenus>
            <PhoneCall></PhoneCall>
            <ChefRecom></ChefRecom>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;