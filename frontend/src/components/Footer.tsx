import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cbc-ink border-t border-cbc-grey/20 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="MIT CBC Logo" className="h-12 w-auto" />
            <h2 className="font-anton text-4xl text-cbc-offwhite uppercase">MIT CBC</h2>
          </div>
          <p className="text-cbc-grey font-mono text-sm mb-2 uppercase">Cyber Security & Blockchain Club</p>
          <p className="text-cbc-grey/60 font-mono text-xs uppercase mb-4">MIT ADT University</p>
          <p className="text-cbc-grey/60 font-mono text-xs uppercase tracking-widest">
            Cybersecurity · Blockchain · Technology · Community
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <Link href="/about" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            About
          </Link>
          <Link href="/events" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Events
          </Link>
          <Link href="/gallery" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Gallery
          </Link>
          <Link href="/articles" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Articles
          </Link>
          <Link href="/team" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Team
          </Link>
          <Link href="/alumni" className="text-cbc-grey hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Alumni
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWi8icz6RRxoSFCQ3GfF1okBh2WJg996ddF-EJBj7jHyQYjg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-cbc-blue hover:text-cbc-offwhite text-sm uppercase tracking-widest transition-colors">
            Join
          </a>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-cbc-grey/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-cbc-grey/50 uppercase tracking-widest">
        <p>© 2026 CBC</p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/reel/DWQo7kWkpyX/?igsh=MWV4MjliMjlnNDRtMA==" target="_blank" rel="noopener noreferrer" className="hover:text-cbc-offwhite transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/cbc-mitadt" target="_blank" rel="noopener noreferrer" className="hover:text-cbc-offwhite transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
