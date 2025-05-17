import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/Admin/Dashboard';
import MentorDashboard from './pages/Mentor/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Mentor routes */}
      <Route path="/mentor/dashboard" element={<MentorDashboard />} />
    </Routes>
  );
}

export default App;
