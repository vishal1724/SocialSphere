import app from "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/config/db.js";

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${env.NODE_ENV}]`);
});

// Connect to MongoDB in background (non-blocking for minimal setup)
// Server stays up even if DB is not available yet
connectDB().catch((err) => {
  console.warn(`DB connection failed - server still running: ${err.message}`);
});
