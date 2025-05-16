const Session = require("../models/Session");
const Mentor = require("../models/Mentor");

// Create a new session (Admin only)
exports.createSession = async (req, res) => {
  try {
    const { mentorId, sessionType, date, duration, ratePerHour, notes } = req.body;

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });

    const session = await Session.create({
      mentor: mentorId,
      sessionType,
      date,
      duration,
      ratePerHour,
      notes,
      createdBy: req.user.id,
    });

    res.status(201).json(session);
  } catch (err) {
    res.status(500).json({ message: "Failed to create session", error: err.message });
  }
};

// Get sessions for a mentor (filtered)
exports.getMentorSessions = async (req, res) => {
  try {
    const mentorId = req.user.id;

    const sessions = await Session.find({ mentor: mentorId }).sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch sessions", error: err.message });
  }
};

// Admin: Get sessions of any mentor (optional filters)
exports.getAllSessions = async (req, res) => {
  try {
    const { mentorId, startDate, endDate } = req.query;
    let query = {};

    if (mentorId) query.mentor = mentorId;
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const sessions = await Session.find(query).populate("mentor").sort({ date: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Failed to get sessions", error: err.message });
  }
};
