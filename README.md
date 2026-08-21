# Allwell HQ

Personal brand platform for Allwell Godwin — Financial Data Scientist & Quantitative Analyst.

This is **Phase 1**: the full premium frontend, seeded with real content, with no database/CMS/auth/AI features yet. See [Roadmap](#roadmap) below for what's deferred.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, page/menu transitions)
- next-themes (dark/light mode)
- react-hook-form + zod (contact form validation)
- Canvas-based particle field for the hero (chosen over Three.js/R3F to keep the site light and hit strong Lighthouse scores on mobile — see [Design decisions](#design-decisions))

## Getting started

```bash
npm install --ignore-scripts   # this environment restricts install scripts; plain `npm install` also works elsewhere
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything text-based lives in `src/lib/data/*.ts` — no code changes needed to update copy:

| File | Controls |
| --- | --- |
| `profile.ts` | Name, tagline (and alternates), bio, values, socials, location, availability, CV link |
| `education.ts` | Degrees |
| `experience.ts` | Work history timeline |
| `skills.ts` | Skills dashboard categories/items/proficiency |
| `projects.ts` | Project showcase + detail pages |
| `certifications.ts` | Certification gallery |
| `research.ts` | Research interests + reading list |
| `blog.ts` | Blog index (posts are drafts — see below) |

To change the tagline shown in the hero, edit `profile.tagline` in `src/lib/data/profile.ts`. Three ready-made alternates are kept in `profile.taglineAlternates`.

The CV PDF served from the "Download CV" buttons is `public/cv.pdf` — replace this file to update it (site copy doesn't need to change).

## Design decisions

- **No Three.js/R3F in the hero.** A hand-rolled canvas particle/constellation field is used instead — it delivers the same "AI-inspired visualization" feel at a fraction of the JS payload, respects `prefers-reduced-motion`, and pauses when the tab is hidden. Full WebGL scenes (e.g. a Black-Scholes surface or Monte Carlo visualizer) are natural candidates for a dedicated project page later, where the payload is justified by the content.
- **No component library (shadcn/Radix) yet.** UI primitives in `src/components/ui/` are hand-built and intentionally minimal, to keep the design system fully custom and dependency-light. Swappable for shadcn later if the admin CMS phase wants its speed.
- **Skill proficiency percentages and reading list are placeholders** calibrated by the assistant, not sourced from any objective benchmark — recalibrate `skillCategories` in `skills.ts` freely.
- **Blog posts are drafts** (`draft: true` in `blog.ts`) with real titles/angles but no body copy — replace with real writing or wire up MDX when ready.

## Roadmap

This repo is architected so the phases below layer on without a rewrite:

- **Phase 2 — Backend & CMS**: Prisma + PostgreSQL, NextAuth, admin dashboard for managing projects/blog/research/skills/certificates without code edits, REST API, media uploads (Cloudinary), Docker/Docker Compose.
- **Phase 3 — Intelligence**: AI chatbot trained on site content, semantic/smart search, project recommendations.
- **Phase 4 — Interactive finance**: Black–Scholes and Heston visualizers, Monte Carlo simulators, trading-strategy visualizers — likely where a real Three.js/R3F investment pays off.

## Deployment

Vercel-ready out of the box. Set `NEXT_PUBLIC_SITE_URL` in `.env` (see `.env.example`) and update `src/lib/site.ts` with the production domain before deploying, so Open Graph/JSON-LD/sitemap URLs are correct.
