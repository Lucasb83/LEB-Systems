import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usamos Inter, la fuente estándar de Silicon Valley (similar a la de n8n, limpia y técnica)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LEB Systems — Infrastructure, AI & Custom Software",
    template: "%s | LEB Systems",
  },
  description: "We design, build, and automate the digital stack that lets your business scale — from enterprise infrastructure to intelligent AI agents and custom applications.",
  keywords: ["infrastructure development", "web design", "AI implementation", "process automation", "custom applications", "LEB Systems"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LEB Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0F172A] text-slate-200 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}