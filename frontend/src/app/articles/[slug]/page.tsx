import { getArticle } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleDetail from "@/components/articles/ArticleDetail";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article: any = null;
  try { article = await getArticle(slug); } catch { return notFound(); }
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32 pb-24">
      <Navigation />
      <ArticleDetail article={article} />
      <Footer />
    </main>
  );
}