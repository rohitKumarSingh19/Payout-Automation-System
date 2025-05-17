import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure to import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Payout System</Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" onClick={() => setIsOpen(false)}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
