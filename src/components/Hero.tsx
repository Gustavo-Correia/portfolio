import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Mail } from "lucide-react";
import videoAsset from "@/assets/architecture.mp4.asset.json";
import curriculumPdf from "@/assets/curriculum/Curriculo_Luis_Gustavo_Desenvolvedor.pdf";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fade = 1 - offset / 500;

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <video
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-35"
        src={videoAsset.url}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20"
        style={{ opacity: Math.max(fade, 0), transform: `translateY(${offset * 0.15}px)` }}
      >
        <div className="flex items-center gap-4">
          <span className="size-1.5 rounded-full bg-light shadow-[0_0_12px_var(--light)]" />
          <span className="mono-label">Aracaju · Sergipe · Brasil</span>
        </div>

        <h1 className="mt-8 text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
          Luís Gustavo
          <br />
          Alves Correia
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
          Desenvolvedor Full Stack — CRM, automação e integrações
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Desenvolvo aplicações web, plataformas de gestão e soluções de automação voltadas para
          problemas reais de negócio. Atuo desde o planejamento e a arquitetura até backend,
          frontend, banco de dados, integrações e deploy.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver projetos
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm transition-colors hover:border-line-strong"
          >
            <Mail className="size-4" />
            Entrar em contato
          </a>
          <a
            href={curriculumPdf}
            download="Curriculo_Luis_Gustavo_Desenvolvedor.pdf"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm transition-colors hover:border-line-strong"
          >
            <Download className="size-4" />
            Baixar currículo
          </a>
          <a
            href="https://github.com/Gustavo-Correia"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line px-6 py-3 text-sm transition-colors hover:border-line-strong"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-6xl items-center gap-4 px-6">
        <span className="mono-label">Role para explorar</span>
        <span className="h-px flex-1 bg-line" />
      </div>
    </section>
  );
}
