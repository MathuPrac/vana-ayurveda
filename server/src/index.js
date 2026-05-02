/**
 * server/src/index.js
 * Vana Ayurveda — Express + MongoDB backend scaffold
 *
 * Run:  npm install && npm run dev
 * Env:  copy .env.example → .env and fill in your values
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import inquiryRoutes from "./routes/inquiries.js";
import treatmentRoutes from "./routes/treatments.js";
import testimonialRoutes from "./routes/testimonials.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());

// ── Routes ──────────────────────────────────────────────────────────────────
app.use("/api/inquiries",    inquiryRoutes);
app.use("/api/treatments",   treatmentRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.get("/api/health", (_, res) => res.json({ status: "ok", service: "Vana Ayurveda API" }));

// ── MongoDB connection ───────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/vana-ayurveda")
  .then(() => {
    console.log("✅  MongoDB connected");
    app.listen(PORT, () => console.log(`🌿  Vana API running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  });
