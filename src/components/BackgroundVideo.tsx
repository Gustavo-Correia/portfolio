import { useEffect, useRef } from "react";

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let supportsNegativeRate = false;
    try {
      video.playbackRate = -0.5;
      supportsNegativeRate = video.playbackRate < 0;
      video.playbackRate = 1;
    } catch {
      supportsNegativeRate = false;
    }

    // Tempo (s) que o vídeo leva para "alcançar" o alvo do scroll.
    const CATCHUP = 0.25;
    // Velocidade máxima de reprodução (x).
    const MAX_RATE = 3.5;
    // Dentro dessa faixa (s) o vídeo fica pausado no frame atual.
    const IDLE_GAP = 0.05;

    const render = () => {
      rafRef.current = null;
      if (video.readyState < 2 || video.duration <= 0 || video.seeking) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      const target = p * video.duration;
      const diff = target - video.currentTime;

      if (Math.abs(diff) < IDLE_GAP) {
        if (!video.paused) video.pause();
        return;
      }

      if (video.paused) {
        void video.play().catch(() => {});
      }

      if (diff < 0 && !supportsNegativeRate) {
        // Sem suporte a playbackRate negativo (ex.: Safari): volta por seek.
        if (Math.abs(diff) > 0.2) video.currentTime = target;
      } else {
        video.playbackRate = Math.max(-MAX_RATE, Math.min(MAX_RATE, diff / CATCHUP));
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const schedule = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    video.addEventListener("loadedmetadata", schedule);
    video.addEventListener("seeked", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      video.removeEventListener("loadedmetadata", schedule);
      video.removeEventListener("seeked", schedule);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <video
        ref={videoRef}
        className="size-full object-cover opacity-90"
        src={`${import.meta.env.BASE_URL}White_lines.mp4`}
        preload="auto"
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background/80" />
    </div>
  );
}