import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation | LEB Systems — LLM Integration, RAG, Workflow Automation",
  description: "We deploy custom AI agents, RAG knowledge pipelines, LLM integrations, and end-to-end process automation that eliminates manual work and scales 24/7.",
};

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
