"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data/experience";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Timeline() {
  const [openSlug, setOpenSlug] = useState<string | null>(experience[0]?.slug ?? null);

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border md:block" />
      <div className="space-y-4">
        {experience.map((role, i) => {
          const open = openSlug === role.slug;
          return (
            <Reveal key={role.slug} delay={i * 0.04}>
              <div className="relative md:pl-10">
                <span className="absolute left-0 top-6 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg md:block" />
                <button
                  type="button"
                  onClick={() => setOpenSlug(open ? null : role.slug)}
                  aria-expanded={open}
                  className="w-full rounded-2xl border border-border bg-bg-elevated p-6 text-left transition-colors hover:border-fg-subtle"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-fg-subtle">
                        {role.start} – {role.end}
                      </p>
                      <h3 className="mt-1 text-lg font-medium text-fg">{role.role}</h3>
                      <p className="text-sm text-fg-muted">
                        {role.org} &middot; {role.location}
                      </p>
                    </div>
                    <ArrowIcon
                      className={cn(
                        "mt-1 h-4 w-4 shrink-0 text-fg-subtle transition-transform duration-300",
                        open ? "rotate-90" : "rotate-0",
                      )}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                          {role.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        {role.tech && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {role.tech.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
