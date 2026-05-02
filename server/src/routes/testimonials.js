// routes/testimonials.js
import { Router } from "express";
const router = Router();

router.get("/", async (_req, res) => {
  // TODO: replace with DB query when Testimonial model is created
  res.json({ message: "Connect Testimonial model here." });
});

export default router;
