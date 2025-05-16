const express = require("express");
const router = express.Router();
const {
  createSession,
  getMentorSessions,
  getAllSessions,
} = require("../controllers/sessionController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

// Admin creates a session
router.post("/", auth, role(["admin"]), createSession);

// Mentor views own sessions
router.get("/my", auth, role(["mentor"]), getMentorSessions);

// Admin fetches sessions of any mentor
router.get("/", auth, role(["admin"]), getAllSessions);
module.exports = router;
