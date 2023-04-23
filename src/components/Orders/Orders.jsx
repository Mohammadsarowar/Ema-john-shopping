import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Login from '../login/Login';
import App from '../../App';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import ReviewItem from '../Reviewitem/ReviewItem';

const Orders = () => {
    const saveCart = useLoaderData()
    const [cart,setCart] =useState(saveCart)
    const handleRemoveFromCart=(id)=>{
        const remaining = cart.filter(product=>product.id !==id);
        setCart(remaining)
        removeFromDb(id)
    }
    const handleClearCard = () =>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className="flex justify-around mt-6">
           <div className='flex-row'>
            <h2>This is Orders page: {saveCart.length}</h2>
            {
                saveCart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart={handleRemoveFromCart}
                ></ReviewItem>)
            }
           </div>
           <div className='saveCart-container'>
           <Cart cart={cart}
           handleClearCard={handleClearCard}
           ><Link to="/checkout">
            <button className='m-2 w-full'>Proceed Checkout</button>
           </Link></Cart>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Orders;