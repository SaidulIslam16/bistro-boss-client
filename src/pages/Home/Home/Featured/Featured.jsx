import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="feature-item text-white pt-5">
            <SectionTitle
                heading='From Our Menu'
                subHeading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-7">
                    <p>Sep 10 2023</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, adipisci magnam atque saepe, maxime ratione veniam earum sapiente non tempora illo suscipit. Iure, saepe id! Optio eos blanditiis quidem ullam.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;