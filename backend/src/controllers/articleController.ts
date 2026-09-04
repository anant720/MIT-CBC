import { Request, Response } from "express";
import { supabase } from "../config/db";

export const getAllArticles = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("articles").select("*").order("published_at", { ascending: false });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const getArticleBySlug = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("articles").select("*").eq("slug", req.params.slug).single();
  if (error || !data) { res.status(404).json({ success: false, message: "Article not found" }); return; }
  res.json({ success: true, data });
};

export const createArticle = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("articles").insert([req.body]).select().single();
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.status(201).json({ success: true, data });
};
