import fs from "fs";
import path from "path";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata = {
  title: "Gallery | MIT CBC",
  description: "Photos and memories from MIT CBC events.",
};

export default function Gallery() {
  // Read all images from the public/gallery directory
  let images: string[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      // Filter for common image extensions
      images = files
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map(file => `/gallery/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite selection:bg-cbc-blue selection:text-cbc-ink pt-32">
      <Navigation />
      <div className="pb-32">
        <GalleryPage images={images} />
      </div>
      <Footer />
    </main>
  );
}
