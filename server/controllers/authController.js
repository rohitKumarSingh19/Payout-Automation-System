const Mentor = require("../models/Mentor");
const jwt = require("jsonwebtoken");

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// Register
exports.registerMentor = async (req, res) => {
  try {
    const { name, email, password, defaultRate, role } = req.body;
    const existing = await Mentor.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const mentor = await Mentor.create({ name, email, password, defaultRate, role });
    const token = generateToken(mentor);
    res.status(201).json({ token, user: { id: mentor._id, name: mentor.name, role: mentor.role } });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// Login
exports.loginMentor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const mentor = await Mentor.findOne({ email });
    if (!mentor || !(await mentor.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(mentor);
    res.status(200).json({ token, user: { id: mentor._id, name: mentor.name, role: mentor.role } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  const user = await Mentor.findById(req.user.id).select("-password");
  res.json(user);
};
