import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LEB Systems — Book a Free Discovery Call",
  description: "Tell us about your project. We'll get back to you within 24 hours with a clear path forward. Infrastructure, AI, web design, and custom apps.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
