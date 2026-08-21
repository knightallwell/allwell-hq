import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data/profile";

export function AboutPreview() {
  return (
    <Section eyebrow="About" title="Finance-native, engineering-literate.">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <Reveal>
          <p className="text-balance text-xl leading-relaxed text-fg md:text-2xl">
            {profile.summary}
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              More about me <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-6 border-l border-border pl-6">
            {profile.values.map((value) => (
              <li key={value.title}>
                <p className="font-medium text-fg">{value.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
