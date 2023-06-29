import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login',{
        email: data.email,
        password: data.password
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleChange = (e) =>{
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit} >
        <input type="email" placeholder='Email' onChange={handleChange} name='email' value={data.email} />
        <input type="password" placeholder='Password' onChange={handleChange} name='password' value={data.password} />
        <button type='submit'>Login</button>
        <p>Error</p>
        <span>Don't have an account <Link to={'/register'} >SignUp Now</Link> </span>
      </form>
    </div>
  )
}

export default Login