// layouts/AdminLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px", backgroundColor: "#f5f5f5" }}>
        <h2>Admin Panel</h2>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
