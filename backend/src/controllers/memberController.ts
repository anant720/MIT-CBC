import { Request, Response } from "express";
import { supabase } from "../config/db";

export const getAllMembers = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("members").select("*").eq("is_alumni", false).order("order", { ascending: true }).order("name", { ascending: true });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const getAlumni = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("members").select("*").eq("is_alumni", true).order("graduation_year", { ascending: false }).order("name", { ascending: true });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const getMemberById = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("members").select("*").eq("id", req.params.id).single();
  if (error || !data) { res.status(404).json({ success: false, message: "Member not found" }); return; }
  res.json({ success: true, data });
};

export const createMember = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("members").insert([req.body]).select().single();
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.status(201).json({ success: true, data });
};

export const updateMember = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("members").update(req.body).eq("id", req.params.id).select().single();
  if (error || !data) { res.status(404).json({ success: false, message: "Member not found or update failed" }); return; }
  res.json({ success: true, data });
};

export const deleteMember = async (req: Request, res: Response): Promise<void> => {
  const { error } = await supabase.from("members").delete().eq("id", req.params.id);
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.json({ success: true, message: "Member deleted" });
};
