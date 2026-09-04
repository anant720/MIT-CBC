import { Request, Response } from "express";
import { supabase } from "../config/db";

export const getAllAlumni = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase
    .from("alumni")
    .select("*")
    .order("order", { ascending: true })
    .order("name", { ascending: true });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const createAlumnus = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("alumni").insert([req.body]).select().single();
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.status(201).json({ success: true, data });
};

export const updateAlumnus = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("alumni").update(req.body).eq("id", req.params.id).select().single();
  if (error || !data) { res.status(404).json({ success: false, message: "Alumnus not found or update failed" }); return; }
  res.json({ success: true, data });
};

export const deleteAlumnus = async (req: Request, res: Response): Promise<void> => {
  const { error } = await supabase.from("alumni").delete().eq("id", req.params.id);
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.json({ success: true, message: "Alumnus deleted" });
};
