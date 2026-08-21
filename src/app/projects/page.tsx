import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, quantitative finance and data science projects — reinforcement learning, deep learning, anomaly detection and more.",
};

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Projects"
      description="Eight projects spanning algorithmic trading, predictive modelling, computer vision and business intelligence."
    >
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
