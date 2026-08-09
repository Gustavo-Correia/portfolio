import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectCarousel } from "./ProjectCarousel";
import { Reveal } from "./Reveal";

export function ProjectBlock({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <article className="border-t border-line py-16 first:border-t-0 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <ProjectCarousel images={project.images} title={project.title} />
        </Reveal>

        <div className={flip ? "lg:order-1" : ""}>
          <Reveal delay={80}>
            <span className="mono-label">Projeto {project.index}</span>
            <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-8">
            <span className="mono-label">Funcionalidades</span>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="mt-8">
            <span className="mono-label">Tecnologias e integrações</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220} className="mt-8 space-y-4 border-l border-line pl-5">
            <div>
              <span className="mono-label">Minha participação</span>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.role}</p>
            </div>
            {project.result ? (
              <div>
                <span className="mono-label">Resultado</span>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.result}</p>
              </div>
            ) : null}
          </Reveal>

          {project.links?.length ? (
            <Reveal delay={260} className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
                >
                  {l.label}
                  <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              ))}
            </Reveal>
          ) : null}

          {project.note ? (
            <Reveal delay={300}>
              <p className="mt-8 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
                {project.note}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </article>
  );
}
