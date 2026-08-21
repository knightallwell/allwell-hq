import { education } from "@/lib/data/education";
import { certifications } from "@/lib/data/certifications";

const items = [
  ...education.map((e) => `${e.institution}`),
  ...Array.from(new Set(certifications.map((c) => c.issuer))),
];
const marqueeItems = [...items, ...items];

export function CredentialsStrip() {
  return (
    <div className="border-b border-border py-6">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
