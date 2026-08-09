import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-y-0 left-4 z-40 hidden w-px bg-line md:block">
      <div
        className="w-px bg-foreground glow-line transition-[height] duration-150"
        style={{ height: `${p * 100}%` }}
      />
    </div>
  );
}
