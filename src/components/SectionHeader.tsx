import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-center gap-4">
        <span className="mono-label">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="mono-label">{label}</span>
      </div>
      <h2 className="mt-8 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
