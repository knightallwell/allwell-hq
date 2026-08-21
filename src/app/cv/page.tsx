import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";
import { education } from "@/lib/data/education";
import { experience } from "@/lib/data/experience";
import { skillCategories } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "CV",
  description: "Interactive curriculum vitae — education, experience and core skills. Downloadable as PDF.",
};

export default function CvPage() {
  return (
    <Section
      eyebrow="CV"
      title={profile.fullName}
      description={profile.title}
    >
      <Reveal className="mb-12 flex flex-wrap gap-3">
        <ButtonLink href={profile.cvHref}>Download PDF</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
      </Reveal>

      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Experience
          </h2>
          <RevealGroup className="mt-6 space-y-6">
            {experience.map((role) => (
              <RevealItem key={role.slug}>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-mono text-xs text-fg-subtle">
                    {role.start} – {role.end}
                  </p>
                  <p className="mt-1 font-medium text-fg">{role.role}</p>
                  <p className="text-sm text-fg-muted">{role.org}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <h2 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Education
          </h2>
          <RevealGroup className="mt-6 space-y-6">
            {education.map((entry) => (
              <RevealItem key={entry.degree}>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-mono text-xs text-fg-subtle">
                    {entry.start} – {entry.end}
                  </p>
                  <p className="mt-1 font-medium text-fg">{entry.degree}</p>
                  <p className="text-sm text-fg-muted">{entry.institution}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Core skills
          </h2>
          <RevealGroup className="mt-6 space-y-6">
            {skillCategories.map((cat) => (
              <RevealItem key={cat.category}>
                <p className="font-medium text-fg">{cat.category}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {cat.items.map((i) => i.name).join(" · ")}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
