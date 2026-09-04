import express from "express";
import dotenv from "dotenv";
import { corsOptions } from "./middleware/cors";
import { errorHandler, notFound } from "./middleware/errorHandler";
import connectDB from "./config/db";

import authRoutes    from "./routes/authRoutes";
import eventRoutes   from "./routes/eventRoutes";
import memberRoutes  from "./routes/memberRoutes";
import projectRoutes from "./routes/projectRoutes";
import articleRoutes from "./routes/articleRoutes";
import joinRoutes    from "./routes/joinRoutes";
import alumniRoutes  from "./routes/alumniRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(corsOptions);
app.use(express.json());

// Health
app.get("/api/v1/health", (_req, res) => {
  res.json({ success: true, message: "CBC API is running", timestamp: new Date() });
});

// Routes
// Auth middleware is applied per-route inside each router file
app.use("/api/v1/auth",     authRoutes);
app.use("/api/v1/events",   eventRoutes);
app.use("/api/v1/members",  memberRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/articles", articleRoutes);
app.use("/api/v1/join",     joinRoutes);
app.use("/api/v1/alumni",   alumniRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\nCBC API running on  http://localhost:${PORT}`);
  console.log(`Health check:       GET  http://localhost:${PORT}/api/v1/health`);
  console.log(`Admin login:        POST http://localhost:${PORT}/api/v1/auth/login\n`);
});

export default app;
