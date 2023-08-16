import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
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
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;