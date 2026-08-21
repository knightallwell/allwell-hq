import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";
import { education } from "@/lib/data/education";

export const metadata: Metadata = {
  title: "About",
  description: `Biography, education and philosophy of ${profile.fullName}.`,
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="I bring audit discipline to machine learning."
        description={profile.title}
      >
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-6">
            {profile.bio.map((para, i) => (
              <p key={i} className="text-balance text-lg leading-relaxed text-fg-muted">
                {para}
              </p>
            ))}
            <div className="pt-2">
              <ButtonLink href={profile.cvHref} variant="secondary">
                Download CV
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-bg-elevated p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                Quick facts
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-fg-subtle">Location</dt>
                  <dd className="text-right text-fg">{profile.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-fg-subtle">Focus</dt>
                  <dd className="text-right text-fg">Quant Finance &amp; ML</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-fg-subtle">Experience</dt>
                  <dd className="text-right text-fg">5 years</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-fg-subtle">Consultancy</dt>
                  <dd className="text-right text-fg">August Marathon Analytics</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Values" title="How I approach the work." className="border-t border-border">
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {profile.values.map((value) => (
            <RevealItem key={value.title}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6">
                <h3 className="font-medium text-fg">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {value.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section eyebrow="Education" title="Academic foundation." className="border-t border-border">
        <RevealGroup className="space-y-6">
          {education.map((entry) => (
            <RevealItem key={entry.degree}>
              <div className="grid gap-1 border-b border-border pb-6 md:grid-cols-[1fr_2fr] md:gap-8">
                <div>
                  <p className="font-mono text-xs text-fg-subtle">
                    {entry.start} – {entry.end}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
                    {entry.status}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-fg">{entry.degree}</p>
                  <p className="text-sm text-fg-muted">{entry.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-subtle">
                    {entry.focus}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
