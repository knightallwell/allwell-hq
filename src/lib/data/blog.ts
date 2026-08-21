import type { BlogPost } from "@/types";

/**
 * Starter posts — replace title/excerpt/category with real writing.
 * Each slug maps to a case in app/blog/[slug]/page.tsx.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "auditors-guide-to-anomaly-detection",
    title: "An Auditor's Guide to Anomaly Detection",
    excerpt:
      "Why control-environment thinking makes fraud models more defensible — and what audit practice gets right that pure ML practice often misses.",
    category: "Finance",
    date: "2026-08-01",
    readingTime: "6 min read",
    draft: true,
  },
  {
    slug: "ppo-for-trading-what-actually-matters",
    title: "PPO for Trading: What Actually Matters",
    excerpt:
      "Notes from building a reinforcement-learning trading agent — where reward shaping mattered more than architecture.",
    category: "AI",
    date: "2026-07-18",
    readingTime: "8 min read",
    draft: true,
  },
  {
    slug: "lstm-vs-technical-indicators",
    title: "LSTM vs. Technical Indicators: Do They Agree?",
    excerpt:
      "Comparing what a recurrent network learns against classic RSI/MACD signals on the same price series.",
    category: "Machine Learning",
    date: "2026-06-30",
    readingTime: "7 min read",
    draft: true,
  },
];
