import React from 'react'
import {Form, Navigate, useActionData} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setUserId} from '../slices/loginSlice'

function Login() { 
    let dispatch = useDispatch();
    let response = useActionData(); 
    if(response && !response.error){
        dispatch(setUserId(response.user_id));   
    }
  return (
    <>
        <h2>Login Form</h2>
        <br/>
        <div className='form--wrap'> 
        <Form action='/login' method='post'>
            <input type='name' name="name" className='form-control' placeholder="Enter Name" />
            <br/> 
            { response ? response.error ? 
                <span>{response.message} <br/></span>:
                <Navigate to="/users"/>:
                ''
            } 
            <br/>
            <input type='submit' value="Sign In" className='btn'/>
        </Form>
        </div>  
    </>
  )
}

export default Login