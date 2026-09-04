"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhyCBC from "@/components/about/WhyCBC";
import HowCBCWorks from "@/components/about/HowCBCWorks";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite relative font-mono selection:bg-cbc-blue selection:text-cbc-offwhite overflow-x-hidden">
      <Navigation />
      <AboutHero />
      <AboutAchievements />
      <WhyCBC />
      <HowCBCWorks />
      <AboutCTA />
      <Footer />
    </main>
  );
}
