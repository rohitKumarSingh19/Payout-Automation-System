// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//       const { token } = res.data;

//       localStorage.setItem("token", token);
//       setMessage("Login successful!");
//       // You can redirect user here, e.g., to dashboard
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Mentor Login</h2>
//       {message && <p style={styles.message}>{message}</p>}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     textAlign: "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px",
//     fontSize: "16px",
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   message: {
//     color: "red",
//   }
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css"; // Reuse same styles

const Login = () => {
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
      setMessage("Login successful!");
      // Redirect user to dashboard (optional)
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

