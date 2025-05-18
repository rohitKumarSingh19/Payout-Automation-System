// layouts/MentorLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const MentorLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px", backgroundColor: "#eef7ff" }}>
        <h2>Mentor Dashboard</h2>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MentorLayout;
