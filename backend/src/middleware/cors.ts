import cors from "cors";
const allowedOrigins = ["http://localhost:3000","http://localhost:3001"];
export const corsOptions = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
});
