// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';
// import Navbar from './components/Navbar';
// import AdminDashboard from './pages/Admin/Dashboard';
// import MentorDashboard from './pages/Mentor/Dashboard';
// import Home from './pages/Home';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/Navbar" element={<Navbar/>}/>
//       <Route path="/" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       {/* Admin routes */}
//       <Route path="/admin/dashboard" element={<AdminDashboard />} />

//       {/* Mentor routes */}
//       <Route path="/mentor/dashboard" element={<MentorDashboard />} />
//     </Routes>

//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import AdminDashboard from './pages/Admin/Dashboard';
import MentorDashboard from './pages/Mentor/Dashboard';
import Layout from './components/Layout';
import AdminLayout from './layouts/AdminLayout';
import MentorLayout from './layouts/MentorLayout';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Admin-specific layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Mentor-specific layout */}
      <Route path="/mentor" element={<MentorLayout />}>
        <Route path="dashboard" element={<MentorDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

