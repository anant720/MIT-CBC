import type { Metadata } from "next";
import { Anton, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", variable: "--font-anton", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ weight: ["400","500","600"], variable: "--font-plex-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIT CBC — Cyber Security & Blockchain Club",
  description: "The official student-led cybersecurity and blockchain club of MIT ADT University.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${plexMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-mono bg-cbc-ink text-cbc-offwhite">{children}</body>
    </html>
  );
}
