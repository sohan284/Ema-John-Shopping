import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product,handleAddToCart}=props;
    const {name,seller,ratings,img,price} = props.product;
    return (
       <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price :${price}</p>
            <p><small>Manufacturing :{seller}</small></p>
            <p><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
       </div>
    );
};

export default Product;