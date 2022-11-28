import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {setUserId} from '../slices/loginSlice'

function Logout() { 
    let dispatch = useDispatch();
    dispatch(setUserId(null))
    return (
        <Navigate to='/' />
    )



}

export default Logout