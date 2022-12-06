import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux'

function Navbar() {
  const user_id = useSelector(state => state.login.user_id);
  const cartItems = useSelector(state => state.cart.items);


  return (
    <nav>
        <ul>
        <li>
            <Link to={'/'} >Home</Link>
        </li>
        <li>
            <Link to={'/users'} >Users</Link>
        </li>
        <li>
            <Link to={'/about'} >About</Link>
        </li>
        <li>
            <Link to={'/products'} >Products</Link>
        </li>
        <li>
            <Link to={'/contact'} >Contact</Link>
        </li>
        <li>
           {user_id ? 
            <Link to={'/logout'} >Logout</Link>
            :<Link to={'/login'} >Login</Link>
          }
            </li>
            <li>
              <Link to = {'/cart'} >Cart <span className='navCartItemCount'>{cartItems.length}</span></Link>
            </li>
        </ul>
    </nav>    
  )
}

export default Navbar