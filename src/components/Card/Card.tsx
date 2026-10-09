"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSetLoading } from "../../components/Loader";

interface CardProps {
  media: string;
  title: string;
  category: string;
  height?: string;
  onClick: () => void;
  mediaType?: "image" | "video";
  inCarousel?: boolean;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "mobile":
      return "var(--mobile-color)";
    case "web":
      return "var(--web-color)";
    case "design":
      return "var(--design-color)";
    case "ai":
      return "var(--teal-color)";
    default:
      return "var(--teal-color)";
  }
};

const CardVideo = ({ src, inCarousel = false }: { src: string; inCarousel?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let frame = 0;
    let attempts = 0;
    let delayTimer = 0;
    let observer: MutationObserver | IntersectionObserver | undefined;

    const stop = () => {
      window.clearTimeout(delayTimer);
      video.pause();
      if (video.getAttribute("src")) {
        video.removeAttribute("src");
        video.load();
      }
    };

    const start = () => {
      window.clearTimeout(delayTimer);
      delayTimer = window.setTimeout(() => {
        const slide = container.closest(".slick-slide");
        const stillActive = inCarousel ? !!slide?.classList.contains("slick-active") : true;
        if (!stillActive) return;
        if (video.getAttribute("src") !== src) {
          video.src = src;
        }
        video.muted = true;
        video.play().catch(() => {});
      }, inCarousel ? 200 : 0);
    };

    const apply = (active: boolean) => {
      if (active) start();
      else stop();
    };

    const watchCarousel = () => {
      const slide = container.closest(".slick-slide");
      const slider = container.closest(".slick-slider");
      if (slide && slider?.classList.contains("slick-initialized")) {
        apply(slide.classList.contains("slick-active"));
        const mutationObserver = new MutationObserver(() => {
          apply(slide.classList.contains("slick-active"));
        });
        mutationObserver.observe(slide, { attributes: true, attributeFilter: ["class"] });
        observer = mutationObserver;
        return;
      }

      if (attempts > 40) return;
      attempts += 1;
      frame = window.requestAnimationFrame(watchCarousel);
    };

    if (inCarousel) {
      watchCarousel();
    } else {
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => apply(entry.isIntersecting),
        { threshold: 0.35 }
      );
      intersectionObserver.observe(container);
      observer = intersectionObserver;
    }

    return () => {
      window.clearTimeout(delayTimer);
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [inCarousel, src]);

  return (
    <div ref={containerRef} className="h-full w-full rounded-xl bg-black/5">
      <video
        ref={videoRef}
        className="rounded-xl object-cover w-full h-full"
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  );
};

const Card = ({
  media,
  title,
  category,
  height = "356",
  onClick,
  mediaType = "image",
  inCarousel = false,
}: CardProps) => {
  const setLoading = useSetLoading();
  const mediaSrc = media?.trim() ? media : "";

  const handleClick = () => {
    setLoading(true);
    onClick();
  };

  return (
    <div
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative w-full" style={{ height: `clamp(200px, 30vw, ${height}px)` }}>
        {!mediaSrc ? (
          <div className="rounded-xl w-full h-full bg-[var(--secondary-bg-color)]" />
        ) : mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <CardVideo src={mediaSrc} inCarousel={inCarousel} />
        )}
      </div>
      <div className="pt-2 pb-2">
        <span
          className="inline-flex items-center rounded-xl text-white px-2 py-0.5 mb-1 text-xs uppercase"
          style={{ backgroundColor: getCategoryColor(category) }}
        >
          {category}
        </span>

        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
