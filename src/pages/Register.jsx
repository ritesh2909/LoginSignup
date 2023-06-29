import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

function Register() {

  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register',{
        username: data.username,
        email: data.email,
        password: data.password
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = e => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value});
  }
  
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name='username' value={data.username} onChange={handleChange} />
        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
        <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
        <button type='submit' >Regiter</button>
        <p>Error</p>
        <span>Already have an Account <Link to={'/login'}>Login</Link> </span>
      </form>
    </div>
  )
}

export default Register