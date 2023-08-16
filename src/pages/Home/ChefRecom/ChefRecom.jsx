import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg"


const ChefRecom = () => {
    return (
        <section>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="Should Try"
            ></SectionTitle>
            <div className="md:grid grid-cols-3 gap-10 mt-16">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={img1} alt="food1" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={img1} alt="food1" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-56" src={img1} alt="food1" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecom;