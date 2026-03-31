import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | LEB Systems — Infrastructure, Web Design, AI & Automation",
  description: "Five service pillars under one roof: Infrastructure Development, Web Design, AI Implementation, Process Automation, and Custom Application Development.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
