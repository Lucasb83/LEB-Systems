import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions by Industry | LEB Systems",
  description: "Tailored technology solutions for Financial Services, Healthcare, E-commerce, Manufacturing, Startups, and Professional Services.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
