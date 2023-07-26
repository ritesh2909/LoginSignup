import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      if (res) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Regiter</button>
        {error && <p>{error + "!"}</p>}

        <span>
          Already have an Account <Link to={"/login"}>Login</Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Register;
