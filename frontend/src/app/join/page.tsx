"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-cbc-ink text-cbc-offwhite pt-32 pb-24">
      <Navigation />
      <JoinForm />
      <Footer />
    </main>
  );
}
