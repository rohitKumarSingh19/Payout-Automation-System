
// export default Login;
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Reuse same styles
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { token } = res.data;

      localStorage.setItem("token", token);
      const decoded=jwtDecode(token);
      console.log(decoded);
      setMessage("Login successful!");
      // Redirect user to dashboard (optional)
      // navigate("/dashboard");
      if(decoded==='admin'){
        navigate("/Admin/Dashboard");
      }
      else{
        navigate("/Mentor/Dashboard");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Mentor Login</h2>
      {message && <p className="auth-message error">{message}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

