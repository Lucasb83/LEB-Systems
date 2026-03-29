import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usamos Inter, la fuente estándar de Silicon Valley (similar a la de n8n, limpia y técnica)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEB Systems | Enterprise IT Infrastructure",
  description: "Advanced engineering, zero-trust security, and cognitive AI deployments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#010614] text-slate-200 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}