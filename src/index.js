import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import store from './store';
import { Provider } from 'react-redux'; 
import Home, {getUser} from './components/Home';
import RootLayout from './components/RootLayout';
import Contact from './components/Contact';
import About from './components/About';
import { ContactFormValidation, LoginFormValidation } from './FormValidation';
import Users from './components/Users';
import Login from './components/Login';
import Logout from './components/Logout';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Products, { getProducts } from './components/Products';
import Cart from './components/Cart';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index  element={<Home />}></Route>
    <Route path='/users'  loader={getUser} element={<Users />}></Route>
    <Route path='/contact' element={<Contact />} action={ContactFormValidation}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/login' action={LoginFormValidation} element={<Login />}></Route>
    <Route path='/logout' element={<Logout />}></Route>
    <Route path='/products' loader={getProducts} element={<Products />}></Route>
    <Route path='/cart' loader={getProducts} element={<Cart />}></Route>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);
 