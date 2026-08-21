import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/lib/data/profile";
import { GitHubIcon, LinkedInIcon, YouTubeIcon, MailIcon } from "@/components/ui/icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  mail: MailIcon,
  external: MailIcon,
};

const sitemap = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Writing" },
  { href: "/certifications", label: "Certifications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-mono text-sm font-semibold text-fg">
              {profile.brandName}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {profile.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg-subtle hover:text-fg"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">Site</p>
            <ul className="mt-4 space-y-2.5">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-fg">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {profile.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-fg-subtle md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
