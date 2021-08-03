import { Elements } from '@stripe/react-stripe-js';
import CartListItems from './CartListItems';
import CheckoutForm, { stripePromise } from './Checkout';
import TotalAmount from './TotalAmount';

const CartView = () => {

    return(
        <>
            <CartListItems />
            <TotalAmount />
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </>
    )
}

export default CartView;