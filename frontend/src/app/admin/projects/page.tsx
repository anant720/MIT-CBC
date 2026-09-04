"use client";
import { useEffect, useState } from "react";
import { getProjects, createProject, deleteProject } from "@/lib/api";

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");
  const [featured, setFeatured] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject({ title, description, year: parseInt(year), link, featured });
      fetchProjects();
      setTitle(""); setDescription(""); setYear(""); setLink(""); setFeatured(false);
      alert("Project created!");
    } catch (err) { alert("Error creating project"); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) { alert("Error deleting"); }
  };

  return (
    <div>
      <h1 className="font-anton text-3xl mb-6 text-cbc-offwhite uppercase">Manage Projects</h1>
      
      <div className="bg-cbc-grey/5 border border-cbc-grey/20 p-6 mb-10">
        <h2 className="font-anton text-xl mb-4 uppercase">Add New Project</h2>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input type="number" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Link (e.g. GitHub URL)" value={link} onChange={e => setLink(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" />
          
          <div className="flex items-center gap-2 p-2 md:col-span-2">
            <input type="checkbox" id="featured" checked={featured} onChange={e => setFeatured(e.target.checked)} />
            <label htmlFor="featured">Feature on Homepage</label>
          </div>

          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" rows={3} required />
          <button type="submit" className="bg-cbc-blue text-cbc-ink font-bold p-2 md:col-span-2 uppercase">Create Project</button>
        </form>
      </div>

      <div className="space-y-4">
        {loading ? <p>Loading...</p> : projects.map(p => (
          <div key={p.id} className="border border-cbc-grey/20 p-4 flex justify-between items-center bg-cbc-grey/5">
            <div>
              <div className="font-bold text-lg">{p.title} {p.featured && <span className="text-cbc-blue text-xs ml-2">FEATURED</span>}</div>
              <div className="text-cbc-grey text-sm">{p.year}</div>
            </div>
            <button onClick={() => handleDelete(p.id)} className="text-red-400 border border-red-500/30 px-3 py-1 hover:bg-red-900/30">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
