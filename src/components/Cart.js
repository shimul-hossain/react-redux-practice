import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeCartItem } from '../slices/cartSlice';

function Cart() {
    let products = useLoaderData();
    let dispatch = useDispatch();
    let cartItems = useSelector(item => item.cart.items);
    function getSingleProduct(id){
        let data = products.data.products.find(item => item.id === id);
        return data
    }
    
  return (
    <>
        <div className="product-wrap">
            {cartItems.map(item  => ( 
                <div className="product" key={item.id}>
                    <img src={getSingleProduct(item.id).images[1]} alt="" className='product-image' />
                    <div className="product-title">
                        <h4>{getSingleProduct(item.id).title}</h4>
                    </div>
                    <div className="product-price">
                        <span className='price'>$ {getSingleProduct(item.id).price} x {item.quantity}</span>
                    </div>
                    <button className="product-add-to-cart">
                        <span>Total: {getSingleProduct(item.id).price * item.quantity}</span>
                    </button>
                    <button className="product-remove-cart-item" onClick={() => dispatch(removeCartItem(item.id))}>
                        <span>Remove</span>
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default Cart