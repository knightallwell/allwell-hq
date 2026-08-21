"use client";

import { motion } from "framer-motion";
import { ParticleField } from "./particle-field";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <Container className="relative py-28 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.a
            href={profile.consultancyUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-fg-muted transition-colors hover:border-fg-subtle hover:text-fg"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            {profile.availability} &middot; {profile.location}
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-fg md:text-7xl"
          >
            {profile.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-xl text-balance text-lg text-fg-muted md:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-xl text-balance font-mono text-sm text-accent"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink href="/projects">
              View Projects <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={profile.cvHref} variant="secondary">
              Download CV
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex items-center justify-center gap-5 text-fg-subtle"
          >
            <a href="https://github.com/knightallwell" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-fg">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/allwell-godwin-mba-808853241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-fg">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg">
              <MailIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
