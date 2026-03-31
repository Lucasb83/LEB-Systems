import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | LEB Systems",
  description: "Sign in to your LEB Systems client portal to access your project dashboard.",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
