"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconButton, MediaCard } from "@/shared/ui";

export type ServiceCardItem = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

function ServiceMediaCard({ item }: { item: ServiceCardItem }) {
  return (
    <Link href={item.href} className="block focus:outline-none group">
      <MediaCard className="rounded-sm">
        <MediaCard.Media ratio="4/3" className="rounded-[inherit]">

          {/* IMAGE */}
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="
              object-cover
              transition-transform duration-500 ease-out
              will-change-transform
              group-hover:scale-[1.04]
            "
            sizes="(min-width: 1024px) 33vw, 100vw"
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-black/20
              transition duration-500
              group-hover:bg-black/50
            "
          />

          {/* TOP LEFT TEXT */}
          <div className="absolute left-6 top-6 z-10 text-white">
            <p className="text-lg font-medium">{item.title}</p>
            <p className="mt-1 text-sm opacity-80">
              Start your build →
            </p>
          </div>

          {/* PLUS BUTTON */}
          <div className="absolute right-6 top-6 z-10">
            <button
              className="
                h-12 w-12 rounded-full
                bg-black text-white
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-lime-400 group-hover:text-black
              "
              aria-label={`Open ${item.title}`}
              tabIndex={-1}
            >
              +
            </button>
          </div>

          {/* HOVER DESCRIPTION (bottom) */}
          <div
            className="
              absolute inset-x-6 bottom-6 z-10
              text-white text-sm
              opacity-0 translate-y-4
              transition-all duration-500
              group-hover:opacity-100 group-hover:translate-y-0
            "
          >
            {item.description}
          </div>
        </MediaCard.Media>
      </MediaCard>
    </Link>
  );
}

function getSlideMetrics(scroller: HTMLDivElement) {
  const first = scroller.querySelector<HTMLElement>("[data-slide='true']");
  if (!first) return { slideWidth: 0, gap: 0 };

  const slideWidth = first.getBoundingClientRect().width;

  // gap is flex gap; read it from computed style
  const styles = window.getComputedStyle(scroller);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

  return { slideWidth, gap };
}

export function CoreServicesCarousel({ items }: { items: ServiceCardItem[] }) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const scrollByOne = React.useCallback((dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const { slideWidth, gap } = getSlideMetrics(el);
    if (!slideWidth) return;

    const delta = (slideWidth + gap) * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {/* Arrows (like design) */}
      <div className="absolute -top-14 right-0 flex items-center gap-2">
        <IconButton
          aria-label="Scroll left"
          onClick={() => scrollByOne("prev")}
        >
          <span className="text-base leading-none">←</span>
        </IconButton>

        <IconButton
          aria-label="Scroll right"
          onClick={() => scrollByOne("next")}
        >
          <span className="text-base leading-none">→</span>
        </IconButton>
      </div>

      {/* Track */}
      <div
        ref={scrollerRef}
        className={[
          "flex gap-4 overflow-x-auto",
          "snap-x snap-mandatory",
          "pb-gap-xs",
          "scroll-smooth",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        ].join(" ")}
        aria-label="Core services carousel"
      >
        {items.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            data-slide="true"
            className={[
              "snap-start",
              "shrink-0",
              // 1 card on small, 2 on md, 3 on lg (3 visible desktop)
              "w-[85%]",
              "sm:w-[70%]",
              "md:w-[calc((100%-var(--gap-gapMd))/2)]",
              "lg:w-[calc((100%-2*var(--gap-gapMd))/3)]",
            ].join(" ")}
          >
            <ServiceMediaCard item={item} />
          </div>
        ))}
      </div>

      {/* Optional edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
