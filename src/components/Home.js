import axios from 'axios'
import React from 'react' 

function Home() {  
  return (
    <h1>Home</h1>
  )
}

export default Home

export async function getUser(){
  return await axios.get('https://jsonplaceholder.typicode.com/users');
}