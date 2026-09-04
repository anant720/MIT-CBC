import { Router } from "express";
import { submitJoin, getAllJoinRequests, deleteJoinRequest } from "../controllers/joinController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.post("/",       submitJoin);         // public — anyone can apply
router.get("/",        protect, getAllJoinRequests);    // admin only
router.delete("/:id",  protect, deleteJoinRequest);    // admin only
export default router;
