import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SkillsDashboard } from "@/components/skills/skills-dashboard";

export const metadata: Metadata = {
  title: "Skills",
  description: "An interactive dashboard of quantitative finance, ML and engineering skills.",
};

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Capabilities"
      title="Skills dashboard"
      description="Filter by category or search directly. Proficiency reflects applied project depth, not just familiarity."
    >
      <SkillsDashboard />
    </Section>
  );
}
