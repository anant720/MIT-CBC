import { Router } from "express";
import { getAllArticles, getArticleBySlug, createArticle } from "../controllers/articleController";
import { protect } from "../middleware/authMiddleware";

const router = Router();
router.get("/",        getAllArticles);   // public
router.get("/:slug",   getArticleBySlug); // public
router.post("/",       protect, createArticle);  // admin
export default router;
