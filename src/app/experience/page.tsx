import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Timeline } from "@/components/experience/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across audit, financial consulting and applied machine learning.",
};

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Career"
      title="Experience"
      description="Five years spanning external audit, financial consulting and production machine learning across Nigeria and the UAE."
    >
      <Timeline />
    </Section>
  );
}
