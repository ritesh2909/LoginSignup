import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      navigate("/");
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
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={data.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={data.password}
        />
        <button type="submit">Login</button>
        {error && <p>{error + "!"}</p>}
        <span>
          Don't have an account <Link to={"/register"}>SignUp Now</Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default Login;
