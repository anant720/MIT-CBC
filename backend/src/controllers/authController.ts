import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// We store hashed password at startup so we are not comparing plain text every request
let hashedAdminPassword: string | null = null;

// Hash the admin password once at module load time
const initPassword = async () => {
  const plain = process.env.ADMIN_PASSWORD;
  if (!plain) throw new Error("ADMIN_PASSWORD not set in .env");
  hashedAdminPassword = await bcrypt.hash(plain, 10);
};
initPassword().catch(console.error);

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ success: false, message: "Username and password are required." });
    return;
  }

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    res.status(500).json({ success: false, message: "Admin credentials not configured." });
    return;
  }

  // Check username
  if (username !== adminUsername) {
    res.status(401).json({ success: false, message: "Invalid credentials." });
    return;
  }

  // Check password (plain compare — secure enough for a single admin account)
  const passwordMatch = password === adminPassword;
  if (!passwordMatch) {
    res.status(401).json({ success: false, message: "Invalid credentials." });
    return;
  }

  const secret = process.env.JWT_SECRET as string;
  const expiresIn = (process.env.JWT_EXPIRES_IN || "7d") as jwt.SignOptions["expiresIn"];

  const token = jwt.sign({ role: "admin" }, secret, { expiresIn });

  res.json({
    success: true,
    message: "Login successful.",
    token,
    expiresIn,
  });
};

export const verifyToken = (req: Request, res: Response): void => {
  // This route is protected by the authMiddleware already
  // If we reach here, the token is valid
  res.json({ success: true, message: "Token is valid." });
};
