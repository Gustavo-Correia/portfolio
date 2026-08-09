import { useEffect, useRef } from "react";

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const render = () => {
      rafRef.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      if (video.readyState >= 2 && video.duration > 0) {
        const time = p * video.duration;
        if (Math.abs(video.currentTime - time) > 0.01) video.currentTime = time;
      }
    };

    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    video.addEventListener("loadedmetadata", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <video
        ref={videoRef}
        className="size-full object-cover opacity-90"
        src="/White_lines.mp4"
        preload="auto"
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background/80" />
    </div>
  );
}
