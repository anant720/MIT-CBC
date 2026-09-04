import { Router } from "express";
import { getAllMembers, getAlumni, getMemberById, createMember, updateMember, deleteMember } from "../controllers/memberController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.get("/alumni",    getAlumni);       // public
router.get("/",          getAllMembers);   // public
router.get("/:id",       getMemberById);  // public
router.post("/",         protect, createMember);  // admin
router.put("/:id",       protect, updateMember);  // admin
router.delete("/:id",    protect, deleteMember);  // admin
export default router;
