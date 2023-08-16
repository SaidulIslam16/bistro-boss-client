import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenus from "../PopularMenu/PopularMenus";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenus></PopularMenus>
            <Featured></Featured>
        </div>
    );
};

export default Home;