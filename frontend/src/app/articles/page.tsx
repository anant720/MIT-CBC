import { getArticles } from "@/lib/api";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticlesPage from "@/components/articles/ArticlesPage";

export const metadata = { title: "Articles | MIT CBC", description: "Writings and research from MIT CBC." };
export const revalidate = 300;

export default async function Articles() {
  let articles: any[] = [];
  try { articles = await getArticles(); } catch (e) { articles = []; }
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32">
      <Navigation />
      <div className="pb-32">
        <ArticlesPage articles={articles} />
      </div>
      <Footer />
    </main>
  );
}
