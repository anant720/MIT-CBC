"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getArticles } from "@/lib/api";

export default function Latest() {
  const [articles, setArticles] = useState<any[]>([]);
  useEffect(() => { getArticles().then(data => setArticles(data.slice(0,3))).catch(() => {}); }, []);

  return (
    <section className="py-32 px-6 md:px-12 relative border-t border-cbc-grey/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-anton text-5xl md:text-8xl text-cbc-offwhite uppercase mb-16">From The Network</motion.h2>
        {articles.length === 0 ? (
          <p className="text-cbc-grey font-mono">No articles yet. Stay tuned.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className="group border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-8">{String(idx+1).padStart(2,"0")}</div>
                  <h3 className="font-anton text-3xl text-cbc-offwhite uppercase mb-4">{article.title}</h3>
                  <p className="text-cbc-grey font-mono text-sm">{article.excerpt}</p>
                </div>
                <Link href={`/articles/${article.slug}`} className="text-cbc-grey font-mono text-xs tracking-[0.2em] uppercase mt-8 group-hover:text-cbc-offwhite transition-colors">READ →</Link>
              </motion.div>
            ))}
          </div>
        )}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center md:text-right">
          <Link href="/articles" className="text-cbc-blue font-mono text-sm tracking-[0.2em] hover:text-cbc-offwhite transition-colors">[ VIEW ALL ARTICLES ]</Link>
        </motion.div>
      </div>
    </section>
  );
}

