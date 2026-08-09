import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProjectBlock } from "@/components/ProjectBlock";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHeader } from "@/components/SectionHeader";
import {
  certifications,
  education,
  experiences,
  personalProjects,
  professionalProjects,
  specialties,
  techGroups,
} from "@/data/portfolio";

const title = "Luís Gustavo Alves Correia — Desenvolvedor Full Stack";
const description =
  "Portfólio de Luís Gustavo Alves Correia, desenvolvedor Full Stack especializado em CRM, automação de WhatsApp, integrações de APIs e inteligência artificial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <ScrollProgress />
      <Nav />
      <Hero />

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
        <SectionHeader index="00" label="Sobre mim" title="Quem sou" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou Luís Gustavo Alves Correia, desenvolvedor Full Stack e estudante de Sistemas de
              Informação na Universidade Federal de Sergipe.
            </p>
            <p>
              Minha experiência está concentrada no desenvolvimento de sistemas comerciais,
              plataformas CRM, automações de atendimento e integrações com serviços externos. Já
              trabalhei com soluções que conectam WhatsApp, inteligência artificial, meios de
              pagamento e ferramentas de gestão de clientes.
            </p>
            <p>
              Atualmente atuo no desenvolvimento e na manutenção de uma plataforma de automação de
              WhatsApp e CRM, criando funcionalidades utilizadas em ambiente de produção. Também
              desenvolvo sistemas personalizados como freelancer, atendendo empresas que desejam
              automatizar processos, organizar seus clientes e melhorar o atendimento comercial.
            </p>
            <p className="text-foreground/85">
              Gosto de transformar processos manuais e fragmentados em sistemas centralizados,
              escaláveis e fáceis de utilizar.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-border border border-line">
              {[
                ["Atuação", "Full Stack · CRM · Automação"],
                ["Experiência", "Desde 2023"],
                ["Localização", "Aracaju, Sergipe"],
                ["Formação", "Sistemas de Informação — UFS"],
                ["Status", "Aberto a oportunidades"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="mono-label">{k}</dt>
                  <dd className="text-right text-sm text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="especialidades" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader
            index="01"
            label="Especialidades"
            title="O que eu desenvolvo"
            description="Do levantamento do problema à aplicação rodando em produção."
          />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-6 block h-px w-8 bg-line-strong transition-all duration-500 group-hover:w-16" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader index="02" label="Trajetória" title="Experiência profissional" />
          <div className="space-y-px">
            {experiences.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <div className="grid gap-8 border-t border-line py-12 lg:grid-cols-[1fr_1.6fr]">
                  <div>
                    <h3 className="text-xl font-medium">{e.company}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.role}</p>
                    <p className="mono-label mt-4">{e.period}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                    <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-foreground/85">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {e.footer ? (
                      <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground/70">
                        {e.footer}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader
            index="03"
            label="Projetos profissionais"
            title="Sistemas em produção"
            description="Plataformas comerciais desenvolvidas para empresas e clientes reais."
          />
          {professionalProjects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="pessoais" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader
            index="04"
            label="Projetos pessoais e acadêmicos"
            title="Onde eu experimento"
            description="Projetos próprios e acadêmicos com código e documentação disponíveis."
          />
          {personalProjects.map((p, i) => (
            <ProjectBlock key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="tecnologias" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader
            index="05"
            label="Tecnologias"
            title="Stack por nível de domínio"
            description="Organizado por experiência profissional, uso em projetos e conhecimento em estudo."
          />
          <div className="space-y-px">
            {techGroups.map((g, i) => (
              <Reveal key={g.level} delay={i * 80}>
                <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[1fr_2fr]">
                  <div>
                    <h3 className="text-lg font-medium">{g.level}</h3>
                    <p className="mono-label mt-2">{g.note}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-3 py-1.5 font-mono text-[11px] tracking-wide text-foreground/80 transition-colors hover:border-line-strong hover:text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formacao" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader index="06" label="Formação" title="Educação e certificações" />
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              {education.map((e) => (
                <div key={e.title} className="border border-line p-8">
                  <h3 className="text-lg font-medium">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.place}</p>
                  <p className="mono-label mt-4">{e.period}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={100}>
              <span className="mono-label">Cursos e certificações</span>
              <ul className="mt-5 divide-y divide-border border-y border-line">
                {certifications.map((c) => (
                  <li key={c} className="py-4 text-sm text-foreground/85">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-36">
          <SectionHeader
            index="07"
            label="Contato"
            title="Vamos conversar?"
            description="Estou disponível para oportunidades como desenvolvedor Full Stack e para projetos de CRM, automação, integrações, sistemas comerciais e inteligência artificial."
          />

          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {[
              {
                icon: Mail,
                label: "E-mail",
                value: "gucorreia2901@gmail.com",
                href: "mailto:gucorreia2901@gmail.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "(79) 98141-5148",
                href: "https://wa.me/5579981415148",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "gustavo-correia-2901",
                href: "https://linkedin.com/in/gustavo-correia-2901",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "Gustavo-Correia",
                href: "https://github.com/Gustavo-Correia",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-background p-8 transition-colors hover:bg-card"
              >
                <div>
                  <span className="mono-label">{c.label}</span>
                  <p className="mt-3 text-base text-foreground">{c.value}</p>
                </div>
                <c.icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </a>
            ))}
          </div>

          <Reveal delay={120} className="mt-16">
            <p className="max-w-3xl text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              Tem um projeto, uma oportunidade ou um processo que precisa ser automatizado? Entre em
              contato para conversarmos sobre como transformar essa necessidade em uma solução
              funcional, escalável e preparada para produção.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label">© {new Date().getFullYear()} Luís Gustavo Alves Correia</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            Aracaju, Sergipe
          </p>
        </div>
      </footer>
    </main>
  );
}
