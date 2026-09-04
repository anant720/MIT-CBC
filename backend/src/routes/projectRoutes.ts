import { Router } from "express";
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/projectController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.get("/",        getAllProjects);    // public
router.get("/:id",     getProjectById);   // public
router.post("/",       protect, createProject);  // admin
router.put("/:id",     protect, updateProject);  // admin
router.delete("/:id",  protect, deleteProject);  // admin
export default router;
