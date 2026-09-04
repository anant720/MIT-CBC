import { Request, Response } from "express";
import { supabase } from "../config/db";

export const submitJoin = async (req: Request, res: Response): Promise<void> => {
  const { name, email, year, interest, skills } = req.body;
  
  if (!name || !email || !year || !interest) {
    res.status(400).json({ success: false, message: "Please fill all required fields." }); return;
  }
  
  // Check existing
  const { data: existing } = await supabase.from("join_requests").select("id").eq("email", email).single();
  if (existing) {
    res.status(400).json({ success: false, message: "This email has already submitted a request." }); return;
  }
  
  const { data, error } = await supabase.from("join_requests").insert([{ name, email, year, interest, skills }]).select().single();
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  
  res.status(201).json({ success: true, message: "Join request submitted!", data });
};

export const getAllJoinRequests = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("join_requests").select("*").order("created_at", { ascending: false });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const deleteJoinRequest = async (req: Request, res: Response): Promise<void> => {
  const { error } = await supabase.from("join_requests").delete().eq("id", req.params.id);
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.json({ success: true, message: "Join request deleted" });
};
