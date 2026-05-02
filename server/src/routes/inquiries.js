import { Router } from "express";
import Inquiry from "../models/Inquiry.js";

const router = Router();

// POST /api/inquiries — submit a new retreat inquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, country, inquiry, date, stay, message } = req.body;
    if (!name || !email || !country || !inquiry || !stay || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    const doc = await Inquiry.create({ name, email, phone, country, inquiry, date, stay, message });
    res.status(201).json({ message: "Inquiry received.", id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

// GET /api/inquiries — admin: list all inquiries (add auth middleware in production)
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

export default router;
