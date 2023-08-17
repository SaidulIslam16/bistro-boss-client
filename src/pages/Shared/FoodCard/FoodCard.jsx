
const FoodCard = ({ item }) => {

    const { image, name, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;