import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#projetos", label: "Projetos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "border-b border-line bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-mono text-xs tracking-[0.3em] uppercase transition-colors hover:text-light">
          LGAC
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="border border-line px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:border-line-strong"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
