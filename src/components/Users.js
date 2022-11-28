import React from 'react'
import {Navigate, useLoaderData} from 'react-router-dom' 
import { useSelector } from 'react-redux';
function Users() {
    let user_id = useSelector(state => state.login.user_id);
    console.log(user_id);
    let users = useLoaderData();
  return (
    <> 
    {user_id == null ? 
    <Navigate to="/login"/>:''
    }
    <table className="table">
        <thead>
        <tr>
            <th>sl</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {users.data.map((user) => (
            <tr className={user.id == user_id ? 'active':''} key={user.id}>
            <td scope="row">{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            </tr>
        ))} 
        </tbody>
    </table> 
    </>
  )
}

export default Users