"use client";
import { useEffect, useState } from "react";
import { getEvents, createEvent, deleteEvent } from "@/lib/api";

export default function AdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Workshop");

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent({ title, slug, description, date, time, location, category });
      fetchEvents();
      setTitle(""); setSlug(""); setDescription(""); setDate(""); setTime(""); setLocation("");
      alert("Event created!");
    } catch (err) {
      alert("Error creating event");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteEvent(id);
      fetchEvents();
    } catch (err) { alert("Error deleting"); }
  };

  return (
    <div>
      <h1 className="font-anton text-3xl mb-6 text-cbc-offwhite uppercase">Manage Events</h1>
      
      <div className="bg-cbc-grey/5 border border-cbc-grey/20 p-6 mb-10">
        <h2 className="font-anton text-xl mb-4 uppercase">Add New Event</h2>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Slug (e.g. hackathon-2026)" value={slug} onChange={e => setSlug(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Time (e.g. 5:00 PM)" value={time} onChange={e => setTime(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <select value={category} onChange={e => setCategory(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2">
            <option>Workshop</option><option>CTF</option><option>Meetup</option>
          </select>
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" rows={3} required />
          <button type="submit" className="bg-cbc-blue text-cbc-ink font-bold p-2 md:col-span-2 uppercase">Create Event</button>
        </form>
      </div>

      <div className="space-y-4">
        {loading ? <p>Loading...</p> : events.map(ev => (
          <div key={ev.id} className="border border-cbc-grey/20 p-4 flex justify-between items-center bg-cbc-grey/5">
            <div>
              <div className="font-bold text-lg">{ev.title}</div>
              <div className="text-cbc-grey text-sm">{ev.date} | {ev.category}</div>
            </div>
            <button onClick={() => handleDelete(ev.id)} className="text-red-400 border border-red-500/30 px-3 py-1 hover:bg-red-900/30">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
