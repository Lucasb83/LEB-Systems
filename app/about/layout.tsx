import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LEB Systems — Full-Stack Technology Partner",
  description: "LEB Systems is a technology partner for companies that want to move fast without breaking things. Infrastructure, AI, web design, and automation under one roof.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
