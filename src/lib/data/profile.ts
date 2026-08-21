import type { SocialLink } from "@/types";

/**
 * Edit this file to change the brand name, tagline, and contact identity
 * shown across the entire site. Nothing else needs to change.
 */
export const profile = {
  brandName: "Allwell",
  fullName: "Allwell Chinememma Godwin",
  shortName: "Allwell Godwin",
  title: "Financial Data Scientist & Quantitative Analyst",

  // Swap the active tagline any time — the rest of the array is kept
  // as ready-made alternatives.
  tagline: "AI · Financial Engineering · Quantitative Research",
  taglineAlternates: [
    "Building Intelligent Systems for the Future of Finance.",
    "Turning Data into Intelligent Decisions.",
    "AI | Quantitative Finance | Data Science",
  ],

  summary:
    "Financial data scientist and quantitative analyst working at the intersection of finance, machine learning and applied statistics. Five years of professional experience spanning external audit, financial consulting and production machine learning, with engagements in Nigeria and the United Arab Emirates.",

  bio: [
    "I work at the intersection of finance, machine learning and applied statistics — five years across external audit, financial consulting and production machine learning, with engagements in Nigeria and the United Arab Emirates. My research and practice interests centre on financial anomaly detection, deep learning for financial time series, reinforcement learning for trading strategy, and the application of machine-learning methods to risk measurement and market data.",
    "A background in accounting and audit underpins the technical work: I build models with explicit attention to documentation, control environment, auditability and regulatory defensibility — qualities frequently absent from purely engineering-led analytics practice.",
    "I now run August Marathon Analytics, a quantitative analytics consultancy, and share what I learn under the Audit2Alpha banner — the journey from audit to alpha.",
  ],

  values: [
    {
      title: "Auditability first",
      description:
        "Models are only as useful as they are defensible. Documentation, validation and control-environment thinking are part of the build, not an afterthought.",
    },
    {
      title: "Evidence over narrative",
      description:
        "Claims are backed by benchmarks, backtests and measured deltas — not adjectives.",
    },
    {
      title: "Finance-native engineering",
      description:
        "Technical work is grounded in how financial institutions actually operate, regulate and report.",
    },
  ],

  location: "Lagos, Nigeria",
  availability: "Open to select consulting engagements",
  consultancyUrl: "https://augustmarathonanalytics.com",
  email: "allwellgodwin37@gmail.com",

  socials: [
    { label: "GitHub", href: "https://github.com/knightallwell", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/allwell-godwin-mba-808853241/",
      icon: "linkedin",
    },
    { label: "Audit2Alpha", href: "https://www.youtube.com/@audit2alpha", icon: "youtube" },
    { label: "Email", href: "mailto:allwellgodwin37@gmail.com", icon: "mail" },
  ] satisfies SocialLink[],

  cvHref: "/cv.pdf",
};
