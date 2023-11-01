import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts]= useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

//add to card
    const addToCard = (product)=> {
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(cart)
    
    }

    return (
        <div className='shop-container'>
             <div className="products-container">
             {
                products.map(product => <Product
                key={product.id}
                product={product}
                addToCard={addToCard}
                ></Product>)
            }
            </div>
            <div className="card-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;