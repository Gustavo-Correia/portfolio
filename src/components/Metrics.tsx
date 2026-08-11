import type { Highlight } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Metrics({ items }: { items: Highlight[] }) {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
      {items.map((h, i) => (
        <Reveal key={h.label} delay={i * 80}>
          <div className="flex h-full flex-col justify-between gap-10 bg-background p-6 sm:p-8">
            <span className="text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
              {h.value}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">{h.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}