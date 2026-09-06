import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Global middleware - minimal
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route - confirms server is running
app.get("/", (req, res) => {
  res.json({
    message: "Social Media API is running 🚀",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/auth", authRoutes);

// 404 handler - must be after all routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler - minimal
app.use(errorHandler);

export default app;
