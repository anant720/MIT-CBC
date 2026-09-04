"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import HomeIntro from "@/components/sections/HomeIntro";
import FacultyCoordinator from "@/components/sections/FacultyCoordinator";
import HomeEvents from "@/components/sections/HomeEvents";
import Join from "@/components/sections/Join";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite relative font-mono selection:bg-cbc-blue selection:text-cbc-offwhite overflow-x-hidden">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navigation />
          <Hero />
          <HomeIntro />
          <FacultyCoordinator />
          <HomeEvents />
          <Join />
          <Footer />
        </>
      )}
    </main>
  );
}
