"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-cbc-ink/95 backdrop-blur-sm border-b border-cbc-grey/20 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="MIT CBC Logo" className="h-10 w-auto" />
          <span className="font-anton text-3xl uppercase tracking-wider text-cbc-offwhite hover:text-cbc-blue transition-colors hidden sm:block">MIT CBC</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-cbc-grey">
          <Link href="/about" className="hover:text-cbc-blue transition-colors">About</Link>
          <Link href="/events" className="hover:text-cbc-blue transition-colors">Events</Link>
          <Link href="/gallery" className="hover:text-cbc-blue transition-colors">Gallery</Link>
          <Link href="/articles" className="hover:text-cbc-blue transition-colors">Articles</Link>
          <Link href="/team" className="hover:text-cbc-blue transition-colors">Team</Link>
          <Link href="/alumni" className="hover:text-cbc-blue transition-colors">Alumni</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWi8icz6RRxoSFCQ3GfF1okBh2WJg996ddF-EJBj7jHyQYjg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="bg-cbc-blue text-cbc-ink font-bold px-6 py-2 text-sm uppercase tracking-widest hover:bg-cbc-offwhite transition-colors flex items-center gap-2">
            [ Join CBC ]
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-cbc-offwhite text-2xl" aria-label="Menu">
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-cbc-ink border-b border-cbc-grey/20 p-6 flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-cbc-offwhite">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Gallery", href: "/gallery" },
                { label: "Articles", href: "/articles" },
                { label: "Team", href: "/team" },
                { label: "Alumni", href: "/alumni" },
              ].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
