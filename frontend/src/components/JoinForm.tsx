"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitJoin } from "@/lib/api";

export default function JoinForm() {
  const [form, setForm] = useState({ name: "", email: "", year: "", interest: "", skills: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const res = await submitJoin(form);
    if (res.success) { setStatus("success"); setMessage(res.message); }
    else { setStatus("error"); setMessage(res.message || "Something went wrong."); }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12">
      <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-anton text-6xl md:text-8xl text-cbc-offwhite uppercase mb-4">Join CBC</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-cbc-grey font-mono text-sm mb-12">
        You do not need to know everything. You just need to be willing to learn something difficult.
      </motion.p>

      {status === "success" ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-cbc-green p-8 text-cbc-green font-mono">
          <p className="text-2xl font-bold mb-2">REQUEST RECEIVED</p>
          <p className="text-sm">{message}</p>
          <p className="text-sm mt-4 text-cbc-grey">We will reach out to you via email soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={submit} className="space-y-6">
          {[
            { name: "name",  label: "Full Name",    type: "text",  required: true },
            { name: "email", label: "Email Address", type: "email", required: true },
          ].map(f => (
            <div key={f.name}>
              <label className="block text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase mb-2">{f.label} {f.required && "*"}</label>
              <input type={f.type} name={f.name} value={(form as any)[f.name]} onChange={handle} required={f.required}
                className="w-full bg-transparent border border-cbc-grey/30 px-4 py-3 text-cbc-offwhite font-mono text-sm focus:outline-none focus:border-cbc-blue transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase mb-2">Year *</label>
            <select name="year" value={form.year} onChange={handle} required
              className="w-full bg-cbc-ink border border-cbc-grey/30 px-4 py-3 text-cbc-offwhite font-mono text-sm focus:outline-none focus:border-cbc-blue transition-colors">
              <option value="">Select year</option>
              {["FY","SY","TY","LY","OTHER"].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase mb-2">Why do you want to join? *</label>
            <textarea name="interest" value={form.interest} onChange={handle} required rows={4}
              className="w-full bg-transparent border border-cbc-grey/30 px-4 py-3 text-cbc-offwhite font-mono text-sm focus:outline-none focus:border-cbc-blue transition-colors resize-none" />
          </div>

          <div>
            <label className="block text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase mb-2">Skills / Experience (optional)</label>
            <textarea name="skills" value={form.skills} onChange={handle} rows={3}
              className="w-full bg-transparent border border-cbc-grey/30 px-4 py-3 text-cbc-offwhite font-mono text-sm focus:outline-none focus:border-cbc-blue transition-colors resize-none" />
          </div>

          {status === "error" && <p className="text-cbc-red font-mono text-sm">{message}</p>}

          <button type="submit" disabled={status === "loading"}
            className="w-full bg-cbc-blue px-8 py-4 font-anton text-xl uppercase text-cbc-offwhite hover:bg-cbc-offwhite hover:text-cbc-ink transition-colors disabled:opacity-50">
            {status === "loading" ? "SUBMITTING..." : "[ SUBMIT REQUEST ]"}
          </button>
        </form>
      )}
    </div>
  );
}
