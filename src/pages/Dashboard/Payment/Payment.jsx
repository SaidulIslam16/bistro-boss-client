import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

// TODO Provide Stripe api key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const totalPrice = parseFloat(total.toFixed(2));
    console.log(totalPrice);
    return (
        <div className="w-full px-20">
            <SectionTitle subHeading='Please Process the' heading="Payment"></SectionTitle>
            <h3>Onek Takar Bepar Separ</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={totalPrice} />
            </Elements>
        </div>
    );
};

export default Payment;