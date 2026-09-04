import { format } from "date-fns";

export default function ArticleDetail({ article }: { article: any }) {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12">
      <div className="text-cbc-blue font-mono text-xs tracking-widest uppercase mb-4">{format(new Date(article.created_at || new Date()), "dd MMM yyyy")}</div>
      <h1 className="font-anton text-4xl md:text-6xl text-cbc-offwhite uppercase mb-4">{article.title}</h1>
      <p className="text-cbc-grey font-mono text-sm mb-12">BY {article.author?.toUpperCase()}</p>
      <div className="border-t border-cbc-grey/20 pt-12 prose prose-invert max-w-none font-mono text-cbc-grey leading-relaxed text-sm whitespace-pre-wrap">{article.content}</div>
    </div>
  );
}
