"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-cbc-ink flex items-center justify-center font-mono selection:bg-cbc-blue selection:text-cbc-offwhite text-cbc-offwhite">
      <div className="w-full max-w-md p-8 border border-cbc-grey/20 bg-cbc-ink">
        <h1 className="font-anton text-4xl mb-6 text-center text-cbc-offwhite uppercase">Admin Login</h1>
        
        {error && <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 text-sm">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-cbc-grey mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-cbc-ink border border-cbc-grey/20 p-2 text-cbc-offwhite focus:outline-none focus:border-cbc-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-cbc-grey mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-cbc-ink border border-cbc-grey/20 p-2 text-cbc-offwhite focus:outline-none focus:border-cbc-blue"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-cbc-blue text-cbc-ink font-bold py-2 mt-4 hover:bg-cbc-offwhite transition-colors uppercase"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
