import { Section } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/data/projects";

export function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      eyebrow="Selected work"
      title="Systems built at the edge of finance and machine learning."
      description="Four projects spanning reinforcement learning, sequence modelling, anomaly detection and computer vision."
    >
      <RevealGroup className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
      <Reveal delay={0.1} className="mt-10">
        <ButtonLink href="/projects" variant="secondary">
          View all projects <ArrowIcon className="h-4 w-4" />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
