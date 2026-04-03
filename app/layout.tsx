import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usamos Inter, la fuente estándar de Silicon Valley (similar a la de n8n, limpia y técnica)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LEB Systems — AI & Infrastructure Transformation",
    template: "%s | LEB Systems",
  },
  description: "LEB Systems partners with AU/NZ B2B companies to deliver AI automation, cloud modernisation, platform engineering, and infrastructure programs that compound over time.",
  keywords: ["AI automation", "cloud modernisation", "platform engineering", "infrastructure transformation", "AU/NZ B2B", "LEB Systems"],
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