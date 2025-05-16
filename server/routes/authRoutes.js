const express = require("express");
const router = express.Router();
const { registerMentor, loginMentor, getCurrentUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

router.post("/register", registerMentor);
router.post("/login", loginMentor);
router.get("/me", authMiddleware, getCurrentUser);
module.exports = router;
