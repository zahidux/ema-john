import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    const {img, name, price, ratings} = props.product;
    const addToCard = props.addToCard;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
              <h6 className="product-name">{name}</h6>
              <p>Price: ${price}</p>
              <p>{ratings} Starts</p>
            </div>
                 <button onClick={()=>{addToCard(props.product)}}  className='btn'>
                 Add to Cart
             <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;