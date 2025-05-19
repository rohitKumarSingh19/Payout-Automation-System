// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { auth, authorizeRoles } = require('../middleware/auth');

router.get('/dashboard', auth, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

module.exports = router;
