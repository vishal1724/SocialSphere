import express from "express";
const router = express.Router();

// Placeholder - auth routes will be added later
// router.post("/register", ...)
// router.post("/login", ...)

router.get("/", (req, res) => {
  res.json({ message: "Auth route placeholder" });
});

export default router;
