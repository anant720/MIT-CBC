import { Router } from "express";
import { login, verifyToken } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

// POST /api/v1/auth/login — returns a JWT token
router.post("/login", login);

// GET /api/v1/auth/verify — protected, returns success if token is valid
router.get("/verify", protect, verifyToken);

export default router;
