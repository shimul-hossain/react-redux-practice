import React from 'react'
import axios from 'axios'   
export async function ContactFormValidation({request}) {
    let error = {};
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let data = await request.formData();  
    if(!data.get('fname')){
      error.fname = 'First Name Is Required';
    }
    if(!data.get('lname')){
      error.lname = 'Last Name Is Required';
    }
    if(!data.get('email')){
      error.email = 'Email Address Is Required';
    }else if(!regex.test(data.get('email'))){
      error.email = 'Enter a valid email address';
    }
    if(!data.get('password')){
      error.password = 'Password Is Required';
    }
    console.log(error)
    return error;
}

 export async function LoginFormValidation({request}){ 
    let data = await request.formData();
    let response = {
      error: true
    };
    if(!data.get('name')){
      response.message = 'Name is required';
      return response; 
    }else{
      function getUser(){
        return axios.get('https://jsonplaceholder.typicode.com/users');
      }
      let users = (await getUser()).data
      let user = users.find(user => user.username == data.get('name'))
      if (user){
        response.error = false
        response.user_id = user.id
        return response;
      }else{
        response.message = 'Name is invalid' 
        return response; 
      }
    }
 }
