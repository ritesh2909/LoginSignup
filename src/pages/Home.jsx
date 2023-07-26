import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const isLoggedIn = localStorage.getItem("loggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://weary-fawn-coveralls.cyclic.app/api/post/posts/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <>
      <div
        style={{
          
          marginTop: "70px",
        }}
      >
        <div
          className="contentView"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h2 style={{ textAlign: "center" }}>Home</h2>
        </div>

        <div className="btn" style={{float: "right"}}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "green",
              color: "#b9e7e7",
              border: "none",
              float: "right"
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="content" style={{ textAlign: "center", marginTop: "50px" }}>
        
          {posts.map((post) => (
            <li key={post._id}>
              Title: {post.title}, <br /> Description: {post.description}
            </li>
          ))}
        
      </div>
    </>
  );
}

export default Home;
