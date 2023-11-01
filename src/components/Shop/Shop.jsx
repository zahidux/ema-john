import React from 'react';
import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts]= useState([]);

    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

//products set in localStorage and get from localStorage
    useEffect(()=>{
        const storeCart = getShoppingCart();
        const saveCart =[];
        //step-1: get id that store in local storage
        for(const id in storeCart){
            //step 2: get the products by using id
            const addProducts = products.find(product =>product.id ===id)
            // console.log(addProducts)
            //step 3: get quantity of the products
            if(addProducts){
                const quantity = setCart[id];
            addProducts.quantity = quantity;
            //step:4 add the addedproducts to the saved cart
            saveCart.push(addProducts);
            }
            console.log(addProducts)

        } 
        //step-5: setCart
        setCart(saveCart)

    },[products])

//add to card
    const addToCard = (product)=> {
        const newCart = [...cart, product]
        setCart(newCart);
        // console.log(cart)
        addToDb(product.id);
    
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