// routes/treatments.js
// Returns treatments from DB (or falls back to static data)
import { Router } from "express";
const router = Router();

router.get("/", async (_req, res) => {
  // TODO: replace with DB query when Treatment model is created
  res.json({ message: "Connect Treatment model here." });
});

export default router;
