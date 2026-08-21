import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { GitHubIcon, LinkedInIcon, YouTubeIcon, MailIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for consulting engagements, research collaboration or a conversation.",
};

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  mail: MailIcon,
  external: MailIcon,
};

const faqs = [
  {
    q: "What kind of engagements do you take on?",
    a: "Financial modelling, fraud/risk analytics, forecasting and BI dashboard work through August Marathon Analytics — usually short, scoped engagements rather than long retainers.",
  },
  {
    q: "Do you take research collaborations?",
    a: "Yes — particularly around financial anomaly detection, RL for trading, and deep learning for time series.",
  },
  {
    q: "What's the best way to reach you?",
    a: "Email or LinkedIn both work well. For project inquiries, include a short scope so I can respond with something useful.",
  },
];

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk."
      description={`${profile.availability} — based in ${profile.location}, working with clients globally.`}
    >
      <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              Connect directly
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-fg transition-colors hover:border-fg-subtle"
                  >
                    <Icon className="h-4 w-4 text-fg-subtle" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">FAQ</p>
            <div className="mt-4 space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <p className="font-medium text-fg">{faq.q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
