import React from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../slices/cartSlice';

function Products() {
    let products = useLoaderData()
    let dispatch = useDispatch();
    let cartItem = useSelector(state => state.cart.items); 
  return (
    <>
        <div className="product-wrap">
            {products.data.products.map(product => (
                <div className="product" key={product.id}>
                    <img src={product.images[1]} alt="" className='product-image' />
                    <div className="product-title">
                        <h4>{product.title}</h4>
                    </div>
                    <div className="product-price">
                        <span className='price'>$ {product.price}</span>
                    </div>
                    <button className="product-add-to-cart" onClick={() => dispatch(updateCart(product.id))}>
                        <span>Add To cart </span> <span className="count">{cartItem.find(item => item.id == product.id) ? cartItem.find(item => item.id == product.id).quantity : 0}</span>
                    </button>
                </div>
            ))}
        </div>
    </>
  )
}

export default Products

export async function getProducts(){
    return await axios.get('https://dummyjson.com/products');
} 