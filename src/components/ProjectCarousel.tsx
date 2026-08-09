import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProjectCarousel({
  images,
  title,
}: {
  images: { src: string; alt: string }[];
  title: string;
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <div className="group relative">
      <div className="overflow-hidden border border-line bg-card" ref={emblaRef}>
        <div className="flex">
          {images.map((img) => (
            <div key={img.src} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="aspect-[16/10] w-full">
                {isVideo(img.src) ? (
                  <video
                    src={img.src}
                    aria-label={`${title} — ${img.alt}`}
                    className="size-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={`${title} — ${img.alt}`}
                    loading="lazy"
                    className="size-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Imagem ${i + 1} de ${title}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-px w-8 transition-colors ${
                i === selected ? "bg-foreground" : "bg-line"
              }`}
            />
          ))}
          <span className="mono-label ml-3">
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Imagem anterior"
            className="flex size-9 items-center justify-center border border-line text-muted-foreground transition-colors hover:border-line-strong hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima imagem"
            className="flex size-9 items-center justify-center border border-line text-muted-foreground transition-colors hover:border-line-strong hover:text-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
