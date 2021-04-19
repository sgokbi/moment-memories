import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <button className="btn-success w-25 " type="submit" disabled={!stripe}>Pay</button>
            </form>
            <br />
            {
                paymentError && <p style={{ color: "red" }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: "green" }}>Your Payment was Successful</p>
            }
        </div >
    );
};

export default SimpleCardForm;