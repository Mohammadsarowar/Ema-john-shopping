import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    
    return (
        <div className='flex bg-green-200 w-auto m-2 p-2 text-center rounded-md border-slate-900 border-red relative'>
        <img className='w-18 h-14 my-auto' src={product.img}></img>
            <div className='mr-20 ml-10'>
            <h2>Review Item:{product.name}</h2>
             <h3>Quantity: {product.category}</h3>
             <p>Price: {product.price}</p>
            </div>
            <button onClick={()=>handleRemoveFromCart(product.id)} className='hover:border-l-lime-600 hover:bg-slate-400 absolute right-0 my-4 bg-slate-300 mr-3 '>
            <FontAwesomeIcon className='text-rose-500' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;