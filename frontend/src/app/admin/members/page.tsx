"use client";
import { useEffect, useState } from "react";
import { getMembers, getAlumni, createMember, deleteMember } from "@/lib/api";

export default function AdminMembers() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [batch, setBatch] = useState("");
  const [isAlumni, setIsAlumni] = useState(false);
  const [graduationYear, setGraduationYear] = useState("");

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const [current, alumni] = await Promise.all([getMembers(), getAlumni()]);
      setMembers([...current, ...alumni]);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => { fetchMembers(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMember({ 
        name, role, batch, is_alumni: isAlumni, 
        graduation_year: isAlumni ? parseInt(graduationYear) : null 
      });
      fetchMembers();
      setName(""); setRole(""); setBatch(""); setGraduationYear(""); setIsAlumni(false);
      alert("Member created!");
    } catch (err) { alert("Error creating member"); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteMember(id);
      fetchMembers();
    } catch (err) { alert("Error deleting"); }
  };

  return (
    <div>
      <h1 className="font-anton text-3xl mb-6 text-cbc-offwhite uppercase">Manage Members</h1>
      
      <div className="bg-cbc-grey/5 border border-cbc-grey/20 p-6 mb-10">
        <h2 className="font-anton text-xl mb-4 uppercase">Add New Member</h2>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Role (e.g. Core Team)" value={role} onChange={e => setRole(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Batch (e.g. 2022-2026)" value={batch} onChange={e => setBatch(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          
          <div className="flex items-center gap-2 p-2">
            <input type="checkbox" id="isAlumni" checked={isAlumni} onChange={e => setIsAlumni(e.target.checked)} />
            <label htmlFor="isAlumni">Is Alumni?</label>
          </div>

          {isAlumni && (
            <input type="number" placeholder="Graduation Year" value={graduationYear} onChange={e => setGraduationYear(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          )}
          
          <button type="submit" className="bg-cbc-blue text-cbc-ink font-bold p-2 md:col-span-2 uppercase">Add Member</button>
        </form>
      </div>

      <div className="space-y-4">
        {loading ? <p>Loading...</p> : members.map(m => (
          <div key={m.id} className="border border-cbc-grey/20 p-4 flex justify-between items-center bg-cbc-grey/5">
            <div>
              <div className="font-bold text-lg">{m.name} {m.is_alumni && <span className="text-cbc-blue text-xs ml-2">ALUMNI</span>}</div>
              <div className="text-cbc-grey text-sm">{m.role} | {m.batch}</div>
            </div>
            <button onClick={() => handleDelete(m.id)} className="text-red-400 border border-red-500/30 px-3 py-1 hover:bg-red-900/30">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
