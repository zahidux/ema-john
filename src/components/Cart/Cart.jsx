import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart =props.cart;
    // const {cart} = props;
    // console.log(cart)

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity =product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping +product.shipping;
        quantity = quantity + product.quantity;
    }


    //tax calculation
    const tax = total*7/100;

    //grandtotl
     const grandTotal = total + totalShipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Seleted items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;