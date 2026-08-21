import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data/profile";

export function ContactCta() {
  return (
    <Section className="pb-28 md:pb-36">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-soft to-transparent p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Let&apos;s build something rigorous.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-fg-muted">
            {profile.availability} — for consulting engagements, research collaboration, or a conversation about quantitative finance and AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact">
              Get in touch <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
              {profile.email}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
