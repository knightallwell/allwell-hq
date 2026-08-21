import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ArrowIcon, GitHubIcon } from "@/components/ui/icons";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <div className="border-b border-border bg-bg-inset/40 py-16 md:py-24">
        <Container>
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" /> All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>{project.category}</Badge>
            </div>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-fg md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-lg text-fg-muted">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repoUrl && (
                <ButtonLink href={project.repoUrl} variant="secondary">
                  <GitHubIcon className="h-4 w-4" /> View code
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="grid gap-16 py-16 md:grid-cols-[1.6fr_1fr] md:py-24">
        <div className="space-y-12">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Problem
            </h2>
            <p className="mt-3 text-balance text-lg leading-relaxed text-fg">
              {project.problem}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Approach
            </h2>
            <p className="mt-3 text-balance leading-relaxed text-fg-muted">
              {project.approach}
            </p>
          </Reveal>

          {project.lessons && (
            <Reveal delay={0.1}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Lessons learned
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-fg-muted">
                {project.lessons}
              </p>
            </Reveal>
          )}

          {project.future && (
            <Reveal delay={0.15}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Future improvements
              </h2>
              <p className="mt-3 text-balance leading-relaxed text-fg-muted">
                {project.future}
              </p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1}>
          <div className="space-y-8 rounded-2xl border border-border bg-bg-elevated p-6">
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Metrics
                </p>
                <div className="mt-4 space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-fg-muted">{m.label}</span>
                      <span className="font-tabular font-medium text-fg">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                Methods
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.methods.map((m) => (
                  <Badge key={m}>{m}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="border-t border-border">
        <Container className="flex items-center justify-between py-10">
          <div>
            <p className="text-xs text-fg-subtle">Next project</p>
            <Link href={`/projects/${next.slug}`} className="text-lg font-medium text-fg hover:text-accent">
              {next.title}
            </Link>
          </div>
          <ButtonLink href={`/projects/${next.slug}`} variant="ghost">
            <ArrowIcon className="h-4 w-4" />
          </ButtonLink>
        </Container>
      </div>
    </article>
  );
}
