import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Step 1
import "./AuthForm.css";

const Register = () => {
  const navigate = useNavigate(); // ✅ Step 2

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "mentor" // default role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage("Registration successful. Redirecting to login...");
      setTimeout(() => {
        navigate("/login"); // ✅ Step 3: Redirect after delay
      }, 1500); // Optional delay to show success message
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {message && (
        <p className={`auth-message ${message.includes("successful") ? "success" : "error"}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="mentor">Mentor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="auth-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
