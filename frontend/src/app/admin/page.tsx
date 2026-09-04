"use client";
import { useEffect, useState } from "react";
import { getJoinRequests, deleteJoinRequest } from "@/lib/api";

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await getJoinRequests();
      setRequests(data);
    } catch (err: any) {
      setError("Failed to load join requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this request?")) return;
    try {
      await deleteJoinRequest(id);
      fetchRequests();
    } catch (err) {
      alert("Error deleting request");
    }
  };

  return (
    <div>
      <h1 className="font-anton text-4xl mb-2 text-cbc-offwhite uppercase">Dashboard Overview</h1>
      <p className="text-cbc-grey mb-10">Welcome to the CBC Admin Panel.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="border border-cbc-grey/20 p-6 bg-cbc-grey/5">
          <div className="text-sm text-cbc-grey mb-2">Pending Requests</div>
          <div className="text-3xl font-anton">{requests.length}</div>
        </div>
      </div>

      <h2 className="font-anton text-2xl mb-4 text-cbc-offwhite uppercase">Recent Join Requests</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {loading ? (
        <div className="text-cbc-grey">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-cbc-grey/20">
                <th className="p-3 text-cbc-grey font-normal text-sm uppercase">Date</th>
                <th className="p-3 text-cbc-grey font-normal text-sm uppercase">Name</th>
                <th className="p-3 text-cbc-grey font-normal text-sm uppercase">Email</th>
                <th className="p-3 text-cbc-grey font-normal text-sm uppercase">Year</th>
                <th className="p-3 text-cbc-grey font-normal text-sm uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-cbc-grey">No pending requests</td>
                </tr>
              ) : (
                requests.map((req) => (
                  <tr key={req.id} className="border-b border-cbc-grey/10 hover:bg-cbc-grey/5">
                    <td className="p-3 text-sm">{new Date(req.created_at).toLocaleDateString()}</td>
                    <td className="p-3">{req.name}</td>
                    <td className="p-3 text-cbc-grey">{req.email}</td>
                    <td className="p-3">{req.year}</td>
                    <td className="p-3">
                      <button 
                        onClick={() => handleDelete(req.id)}
                        className="text-red-400 hover:text-red-300 text-sm border border-red-500/30 px-2 py-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
