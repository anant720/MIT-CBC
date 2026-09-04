import { Request, Response } from "express";
import { supabase } from "../config/db";

export const getAllProjects = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("projects").select("*").order("featured", { ascending: false }).order("year", { ascending: false });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("projects").select("*").eq("id", req.params.id).single();
  if (error || !data) { res.status(404).json({ success: false, message: "Project not found" }); return; }
  res.json({ success: true, data });
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("projects").insert([req.body]).select().single();
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.status(201).json({ success: true, data });
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("projects").update(req.body).eq("id", req.params.id).select().single();
  if (error || !data) { res.status(404).json({ success: false, message: "Project not found or update failed" }); return; }
  res.json({ success: true, data });
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  const { error } = await supabase.from("projects").delete().eq("id", req.params.id);
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.json({ success: true, message: "Project deleted" });
};
