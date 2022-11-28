import React from 'react'
import { Form } from 'react-router-dom'
import { useActionData } from 'react-router-dom';
function Contact() {
  let error = useActionData();
  return (
    <>
    <h2>Contact Form</h2>
    <br/>
    <div className='form--wrap'> 
      <Form action='/contact' method='post' encType="multipart/form-data">
          <input type='name' name="fname" className='form-control' placeholder="Enter Your First Name" />
          <br/> 
          { error &&
            <span>{error.fname} <br/></span>
          }
          <br/>
          <input type='text' name="lname" className='form-control' placeholder="Enter Your Last Name" />
          <br/>
          { error &&
            <span>{error.lname} <br/></span>
          }
          <br/>
          <input type='text' name="email" className='form-control' placeholder="Enter Your Email" />
          <br/>
          { error &&
            <span>{error.email} <br/></span>
          }
          <br/>
          <input type='password' name="password" className='form-control' placeholder="Enter Your Password" />
          <br/>
          { error &&
            <span>{error.password} <br/></span>
          }
          <br/>
          <input type='submit' value="Sign In" className='btn'/>
      </Form>
    </div>  
    </>
  )
}

export default Contact