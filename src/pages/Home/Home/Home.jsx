import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenus from "../PopularMenu/PopularMenus";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;