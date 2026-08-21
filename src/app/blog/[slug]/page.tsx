import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon } from "@/components/ui/icons";
import { blogPosts } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg">
            <ArrowIcon className="h-4 w-4 rotate-180" /> All writing
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="text-xs text-fg-subtle">{post.date}</span>
            <span className="text-xs text-fg-subtle">&middot;</span>
            <span className="text-xs text-fg-subtle">{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-balance text-lg text-fg-muted">{post.excerpt}</p>

          {post.draft && (
            <div className="mt-10 rounded-2xl border border-dashed border-border-strong p-8 text-center">
              <p className="text-fg-muted">
                Full article coming soon. Replace this placeholder in{" "}
                <code className="rounded bg-bg-inset px-1.5 py-0.5 font-mono text-xs">
                  src/app/blog/[slug]/page.tsx
                </code>{" "}
                with real MDX or rich content once written.
              </p>
            </div>
          )}
        </Reveal>
      </Container>
    </article>
  );
}
