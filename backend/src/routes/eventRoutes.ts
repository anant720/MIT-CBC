import { Router } from "express";
import { getAllEvents, getEventBySlug, createEvent, updateEvent, deleteEvent } from "../controllers/eventController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.get("/",          getAllEvents);      // public
router.get("/:slug",     getEventBySlug);   // public
router.post("/",         protect, createEvent);   // admin
router.put("/:id",       protect, updateEvent);   // admin
router.delete("/:id",    protect, deleteEvent);   // admin
export default router;
