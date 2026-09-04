"use client";
import { useEffect, useState } from "react";
import { getArticles, createArticle, deleteArticle } from "@/lib/api";

export default function AdminArticles() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => { fetchArticles(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createArticle({ title, slug, author, excerpt, content });
      fetchArticles();
      setTitle(""); setSlug(""); setAuthor(""); setExcerpt(""); setContent("");
      alert("Article created!");
    } catch (err) { alert("Error creating article"); }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await deleteArticle(slug);
      fetchArticles();
    } catch (err) { alert("Error deleting"); }
  };

  return (
    <div>
      <h1 className="font-anton text-3xl mb-6 text-cbc-offwhite uppercase">Manage Articles</h1>
      
      <div className="bg-cbc-grey/5 border border-cbc-grey/20 p-6 mb-10">
        <h2 className="font-anton text-xl mb-4 uppercase">Publish New Article</h2>
        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Slug (e.g. my-first-post)" value={slug} onChange={e => setSlug(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2" required />
          <input placeholder="Author Name" value={author} onChange={e => setAuthor(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" required />
          <textarea placeholder="Short Excerpt" value={excerpt} onChange={e => setExcerpt(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" rows={2} required />
          <textarea placeholder="Full Markdown Content..." value={content} onChange={e => setContent(e.target.value)} className="bg-cbc-ink border border-cbc-grey/30 p-2 md:col-span-2" rows={8} required />
          <button type="submit" className="bg-cbc-blue text-cbc-ink font-bold p-2 md:col-span-2 uppercase">Publish Article</button>
        </form>
      </div>

      <div className="space-y-4">
        {loading ? <p>Loading...</p> : articles.map(a => (
          <div key={a.id} className="border border-cbc-grey/20 p-4 flex justify-between items-center bg-cbc-grey/5">
            <div>
              <div className="font-bold text-lg">{a.title}</div>
              <div className="text-cbc-grey text-sm">By {a.author}</div>
            </div>
            <button onClick={() => handleDelete(a.slug)} className="text-red-400 border border-red-500/30 px-3 py-1 hover:bg-red-900/30">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
