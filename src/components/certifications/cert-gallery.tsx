"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data/certifications";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const featured = certifications.filter((c) => c.featured);
const others = certifications.filter((c) => !c.featured);
const categories = ["All", ...Array.from(new Set(others.map((c) => c.category)))];

export function CertGallery() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return others.filter((c) => {
      const matchesCategory = active === "All" || c.category === active;
      const q = query.toLowerCase();
      const matchesQuery =
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        (c.skills ?? []).some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
          Professional Certificates &amp; Honors
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-accent/30 bg-accent-soft/40 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium leading-snug text-fg">{cert.name}</p>
                {cert.honors && (
                  <span className="shrink-0 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                    Honors
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-fg-subtle">{cert.issuer}</p>
              {cert.skills && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent/30 bg-bg-elevated/60 px-2 py-0.5 text-[11px] text-fg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-14 border-t border-border pt-10 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Other certifications
      </p>

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div role="tablist" aria-label="Certification categories" className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active === cat
                  ? "border-accent bg-accent-soft text-fg"
                  : "border-border text-fg-muted hover:border-fg-subtle hover:text-fg",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search certifications…"
          aria-label="Search certifications"
          className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-fg placeholder:text-fg-subtle focus-visible:outline-none md:w-64"
        />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((cert) => (
            <motion.div
              key={cert.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border bg-bg-elevated p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium leading-snug text-fg">{cert.name}</p>
                {cert.honors && (
                  <span className="shrink-0 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                    Honors
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-fg-subtle">{cert.issuer}</p>
              <div className="mt-4">
                <Badge>{cert.category}</Badge>
              </div>
              {cert.skills && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-bg-inset px-2 py-0.5 text-[11px] text-fg-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-fg-muted">No certifications match your search.</p>
      )}
    </div>
  );
}
