import React, { CSSProperties } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button } from 'antd';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        });
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={{ width: '40%'}}>
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>
            </div>
                <Button type="primary" disabled={!stripe} style={buttonStyle}>
                    Pay
                </Button>
            </form>
        </div>
    );
};

export default CheckoutForm;
export const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const containerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem'
}

const buttonStyle: CSSProperties = {
    marginTop: '3rem',
    marginBottom: '5rem'
}

const CARD_OPTIONS = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "#61c9a8",
        color: "#474747",
        fontWeight: 500,
        fontFamily: "nunito",
        fontSize: "1.2rem",
        ":-webkit-autofill": {
          color: "#474747"
        },
        "::placeholder": {
          color: "#474747"
        }
      },
      invalid: {
        iconColor: "#474747",
        color: "#474747"
      }
    }
};