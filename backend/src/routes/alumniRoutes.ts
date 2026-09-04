import { Router } from "express";
import { getAllAlumni, createAlumnus, updateAlumnus, deleteAlumnus } from "../controllers/alumniController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.get("/",        getAllAlumni);                    // public
router.post("/",       protect, createAlumnus);          // admin
router.put("/:id",     protect, updateAlumnus);          // admin
router.delete("/:id",  protect, deleteAlumnus);          // admin
export default router;
