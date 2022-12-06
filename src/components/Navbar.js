import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useSelector } from 'react-redux'

function Navbar() {
  const user_id = useSelector(state => state.login.user_id);
  const cartItems = useSelector(state => state.cart.items);


  return (
    <nav>
        <ul>
        <li>
            <NavLink to={'/'} >Home</NavLink>
        </li>
        <li>
            <NavLink to={'/users'} >Users</NavLink>
        </li>
        <li>
            <NavLink to={'/about'} >About</NavLink>
        </li>
        <li>
            <NavLink to={'/products'} >Products</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'} >Contact</NavLink>
        </li>
        <li>
           {user_id ? 
            <NavLink to={'/logout'} >Logout</NavLink>
            :<NavLink to={'/login'} >Login</NavLink>
          }
            </li>
            <li>
              <NavLink to = {'/cart'} >Cart <span className='navCartItemCount'>{cartItems.length}</span></NavLink>
            </li>
        </ul>
    </nav>    
  )
}

export default Navbar