import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || "anonymous",
                },
            },
        })
        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError.message)
        }

        setProcessing(false);
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
            // Save payment information to the server.
            const payment = {
                email: user?.email,
                transactionId,
                price,
                quantity: cart.length,
                date: new Date(),
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menutItemID),
                itemNames: cart.map(item => item.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-2/3 m-8">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-xs btn-warning mt-4">
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-500">Payment Successful with Transaction ID: <span className="text-red-600">{transactionId}</span></p>}
        </>
    );
};

export default CheckoutForm;