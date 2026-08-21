"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import { ProficiencyBar } from "@/components/ui/proficiency-bar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SkillsDashboard() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const tabs = useMemo(() => ["All", ...skillCategories.map((c) => c.category)], []);

  const filtered = useMemo(() => {
    return skillCategories
      .filter((cat) => active === "All" || cat.category === active)
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active === tab
                  ? "border-accent bg-accent-soft text-fg"
                  : "border-border text-fg-muted hover:border-fg-subtle hover:text-fg",
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <label className="relative">
          <span className="sr-only">Search skills</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills…"
            className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-fg placeholder:text-fg-subtle focus-visible:outline-none md:w-64"
          />
        </label>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((cat) => (
            <motion.div
              key={cat.category}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-bg-elevated p-6"
            >
              <h3 className="font-medium text-fg">{cat.category}</h3>
              <p className="mt-1 text-sm text-fg-muted">{cat.blurb}</p>
              <div className="mt-6 space-y-5">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <ProficiencyBar label={item.name} value={item.proficiency} />
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <Badge className="!py-0.5">{item.years} yr{item.years !== 1 ? "s" : ""}</Badge>
                      {item.related?.slice(0, 2).map((rel) => (
                        <Badge key={rel} className="!py-0.5">
                          {rel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-fg-muted">No skills match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
