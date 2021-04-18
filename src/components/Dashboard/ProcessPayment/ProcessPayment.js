import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeD8LLbn7Y5DNsJSCxmYqvj5HRcaMnRWvNHPEALd2duGAU13ajFexSbKIZC3BlMfb12AWeh6iF1eHZKOlleTC8j00TlJXvAg0');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;