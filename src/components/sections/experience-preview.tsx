import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { experience } from "@/lib/data/experience";

export function ExperiencePreview() {
  return (
    <Section
      eyebrow="Career"
      title="Five years across audit, consulting and applied ML."
    >
      <RevealGroup className="divide-y divide-border border-y border-border">
        {experience.map((role) => (
          <RevealItem key={role.slug}>
            <div className="grid gap-2 py-6 md:grid-cols-[1fr_2fr_1fr] md:items-baseline md:gap-8">
              <p className="font-mono text-xs text-fg-subtle">
                {role.start} – {role.end}
              </p>
              <div>
                <p className="font-medium text-fg">{role.role}</p>
                <p className="text-sm text-fg-muted">{role.org}</p>
              </div>
              <p className="text-sm text-fg-subtle md:text-right">{role.location}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10">
        <ButtonLink href="/experience" variant="secondary">
          Full experience timeline <ArrowIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
