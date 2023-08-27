import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { image, name, price, recipe, _id, category } = item;
    const navigate = useNavigate();
    const [, refetch] = useCart();
    const locatoin = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user?.email) {
            const cartItem = { menutItemID: _id, name, category, price, image, recipe, email: user.email }
            fetch('https://bistro-boss-server-pi-pied.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the cart in client side.
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login for Add to Cart?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: locatoin } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={image} /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-5 px-3 py-1">${price}</p>
            <div className="card-body">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline mt-5 border-0 border-b-4 text-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;