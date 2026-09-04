"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getToken, removeToken } from "@/lib/api";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setAuthorized(true);
      return;
    }
    
    const token = getToken();
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) return <div className="min-h-screen bg-cbc-ink text-cbc-offwhite p-10 font-mono">Loading...</div>;

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    removeToken();
    router.push("/admin/login");
  };

  const navLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Events", path: "/admin/events" },
    { name: "Members", path: "/admin/members" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Articles", path: "/admin/articles" },
  ];

  return (
    <div className="min-h-screen bg-cbc-ink text-cbc-offwhite font-mono flex flex-col md:flex-row selection:bg-cbc-blue selection:text-cbc-offwhite">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-cbc-grey/20 p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="font-anton text-2xl uppercase tracking-wider text-cbc-blue">CBC Admin</h2>
        </div>
        <nav className="flex-1 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`block py-2 px-4 border-l-2 transition-colors ${
                pathname === link.path ? "border-cbc-blue text-cbc-offwhite bg-cbc-grey/10" : "border-transparent text-cbc-grey hover:text-cbc-offwhite hover:border-cbc-grey"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-cbc-grey/20">
          <button 
            onClick={handleLogout}
            className="text-cbc-grey hover:text-red-400 transition-colors flex items-center gap-2"
          >
            ← Logout
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}
