import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical writing on finance, machine learning, mathematics and career.",
};

export default function BlogPage() {
  return (
    <Section
      eyebrow="Writing"
      title="Notes on finance, ML and building in public."
      description="Starter drafts — replace with real posts in src/lib/data/blog.ts."
    >
      <RevealGroup className="divide-y divide-border border-y border-border">
        {blogPosts.map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-2 py-6 transition-colors md:grid-cols-[1fr_3fr_auto] md:items-center md:gap-8"
            >
              <p className="font-mono text-xs text-fg-subtle">{post.date}</p>
              <div>
                <p className="font-medium text-fg group-hover:text-accent">
                  {post.title}
                </p>
                <p className="mt-1 text-sm text-fg-muted">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-1.5">
                <Badge>{post.category}</Badge>
                <p className="text-xs text-fg-subtle">{post.readingTime}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
