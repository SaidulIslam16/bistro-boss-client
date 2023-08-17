
const FoodCard = ({ item }) => {

    const { image, name, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={image} /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-5 px-3 py-1">${price}</p>
            <div className="card-body">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;