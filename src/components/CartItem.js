import React, { useEffect, useState } from 'react' 
import axios from 'axios';

function CartItem({ item }) {
    let [products, setProduct] = useState();

    useEffect(() => {
        async function getProducts(){
            let data = await axios.get('https://dummyjson.com/products');
            setProduct(data);
        }
        getProducts();
    },[]) 

    console.log(products.data.products);
    console.log(item);
  return ( 
    <>
        {products.data.products.map(product => (
        <> {product.id == item.id ?
            <div className="product" key={product.id}>
                <img src={product.images[1]} alt="" className='product-image' />
                <div className="product-title">
                    <h4>{product.title}</h4>
                </div>
                <div className="product-price">
                    <span className='price'>$ {product.price}</span>
                </div>
                <button className="product-add-to-cart">
                    <span>Add To cart </span> <span className="count">0</span>
                </button>
            </div>:''
        }
        </>
        ))}
    </>
  )
}

export default CartItem