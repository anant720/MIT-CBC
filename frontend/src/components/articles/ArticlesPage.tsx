"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";

export default function ArticlesPage({ articles }: { articles: any[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-anton text-6xl md:text-9xl text-cbc-offwhite uppercase mb-4">Articles</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-cbc-grey font-mono text-sm mb-16">
        Writings, research and technical breakdowns from the CBC network.
      </motion.p>
      {articles.length === 0 ? (
        <p className="text-cbc-grey font-mono">No articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="group border border-cbc-grey/20 p-8 hover:border-cbc-blue transition-colors flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-6">{format(new Date(article.created_at || new Date()), "dd MMM yyyy")}</div>
                <h3 className="font-anton text-2xl text-cbc-offwhite uppercase mb-3">{article.title}</h3>
                <p className="text-cbc-grey font-mono text-sm leading-relaxed">{article.excerpt}</p>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-cbc-grey/20 pt-4">
                <span className="text-cbc-grey/60 font-mono text-xs">BY {article.author?.toUpperCase()}</span>
                <Link href={`/articles/${article.slug}`} className="text-cbc-grey font-mono text-xs tracking-widest group-hover:text-cbc-blue transition-colors">READ →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

