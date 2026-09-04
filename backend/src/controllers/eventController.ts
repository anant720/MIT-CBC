import { Request, Response } from "express";
import { supabase } from "../config/db";

export const getAllEvents = async (_req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("events").select("*").order("date", { ascending: true });
  if (error) { res.status(500).json({ success: false, message: error.message }); return; }
  res.json({ success: true, data });
};

export const getEventBySlug = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("events").select("*").eq("slug", req.params.slug).single();
  if (error || !data) { res.status(404).json({ success: false, message: "Event not found" }); return; }
  res.json({ success: true, data });
};

export const createEvent = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("events").insert([req.body]).select().single();
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.status(201).json({ success: true, data });
};

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from("events").update(req.body).eq("id", req.params.id).select().single();
  if (error || !data) { res.status(404).json({ success: false, message: "Event not found or update failed" }); return; }
  res.json({ success: true, data });
};

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  const { error } = await supabase.from("events").delete().eq("id", req.params.id);
  if (error) { res.status(400).json({ success: false, message: error.message }); return; }
  res.json({ success: true, message: "Event deleted" });
};
