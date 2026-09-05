import cors from "cors";
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

export const corsOptions = cors({
  origin: (origin, callback) => {
    // Allow any origin if FRONTEND_URL is not set or if the origin matches allowed ones
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV === "production" || (process.env.FRONTEND_URL && origin === process.env.FRONTEND_URL)) {
      callback(null, true);
    } else {
      // In production, just allow all origins for a public website API to avoid CORS issues
      callback(null, true);
    }
  },
  credentials: true,
});
