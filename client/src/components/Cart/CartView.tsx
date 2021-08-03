import React from 'react';
import CartListItems from './CartListItems';
import TotalAmount from './TotalAmount';

const CartView = () => {

    return(
        <>
            <CartListItems />
            <TotalAmount />
        </>
    )
}

export default CartView;