const express = require("express");
const router = express.Router();
const {
  createSession,
  getMentorSessions,
  getAllSessions,
} = require("../controllers/sessionController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role"); // Unified naming
// Admin creates a session
router.post("/", auth, checkRole(["admin"]), createSession);
// Mentor views their own sessions
router.get("/my", auth, checkRole(["mentor"]), getMentorSessions);
// Admin fetches sessions of any mentor
router.get("/", auth, checkRole(["admin"]), getAllSessions);
module.exports = router;
