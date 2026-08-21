import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { researchInterests, readingList } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests in financial machine learning, deep learning for time series, and reinforcement learning for trading.",
};

export default function ResearchPage() {
  return (
    <>
      <Section
        eyebrow="Research"
        title="Where finance meets machine learning."
        description="Working notes and interests — publications and technical reports will populate here as they're written."
      >
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {researchInterests.map((interest) => (
            <RevealItem key={interest.title}>
              <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6">
                <h3 className="font-medium text-fg">{interest.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {interest.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section
        eyebrow="Reading"
        title="Books that shaped the practice."
        className="border-t border-border"
      >
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {readingList.map((book) => (
            <RevealItem key={book.title}>
              <div className="rounded-xl border border-border p-5">
                <p className="font-medium text-fg">{book.title}</p>
                <p className="mt-1 text-sm text-fg-subtle">{book.author}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
