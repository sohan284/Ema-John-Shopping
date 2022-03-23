import React from 'react';

const Cart = (props) => {
    return (
        <div>
             <p>Order Summary</p>
                <p>{props.cart.length}</p>
        </div>
    );
};

export default Cart;