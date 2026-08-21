import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { ProficiencyBar } from "@/components/ui/proficiency-bar";
import { skillCategories } from "@/lib/data/skills";

export function SkillsPreview() {
  const featured = skillCategories.slice(0, 3);

  return (
    <Section
      eyebrow="Capabilities"
      title="An interactive map of what I build with."
      className="bg-bg-inset/40"
    >
      <RevealGroup className="grid gap-8 md:grid-cols-3">
        {featured.map((cat) => (
          <RevealItem key={cat.category}>
            <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6">
              <h3 className="font-medium text-fg">{cat.category}</h3>
              <p className="mt-1 text-sm text-fg-muted">{cat.blurb}</p>
              <div className="mt-6 space-y-4">
                {cat.items.slice(0, 3).map((item) => (
                  <ProficiencyBar key={item.name} label={item.name} value={item.proficiency} />
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="mt-10">
        <ButtonLink href="/skills" variant="secondary">
          Full skills dashboard <ArrowIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
