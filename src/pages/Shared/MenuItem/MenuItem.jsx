

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name} ------</h3>
                <p>{recipe}</p>
            </div>
            <h4 className="text-xl text-yellow-500">${price}</h4>
        </div>
    );
};

export default MenuItem;