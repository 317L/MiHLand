import * as React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/shared/lib/cn";
import { Card } from "@/shared/ui/card";

/* =========================================
   Root
========================================= */

type RootProps = React.ComponentPropsWithoutRef<typeof Card> & {
  size?: "sm" | "md" | "lg";
};

const Root = React.forwardRef<HTMLDivElement, RootProps>(
  ({ className, size = "md", ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "group overflow-hidden",
        size === "sm" && "rounded-xl",
        size === "md" && "rounded-2xl",
        size === "lg" && "rounded-[28px]",
        className
      )}
      {...props}
    />
  )
);

Root.displayName = "MediaCard";

/* =========================================
   Media Wrapper (aspect ratio)
========================================= */

type MediaProps = React.HTMLAttributes<HTMLDivElement> & {
  ratio?: "16/9" | "4/3" | "1/1";
};

const Media = React.forwardRef<HTMLDivElement, MediaProps>(
  ({ className, ratio = "4/3", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-muted",
        ratio === "16/9" && "aspect-video",
        ratio === "4/3" && "aspect-[4/3]",
        ratio === "1/1" && "aspect-square",
        className
      )}
      {...props}
    />
  )
);

Media.displayName = "MediaCard.Media";

/* =========================================
   Image (Next.js optimized)
========================================= */

type ImageProps = Omit<NextImageProps, "fill"> & {
  dim?: boolean;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, dim = true, alt, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        fill
        alt={alt ?? ""}
        className={cn(
          "object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.02]",
          dim && "brightness-[0.9]",
          className
        )}
        {...props}
      />
    );
  }
);

Image.displayName = "MediaCard.Image";

/* =========================================
   Overlay
========================================= */

type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  gradient?: "none" | "soft" | "strong";
};

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, gradient = "soft", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0",
        gradient === "soft" &&
          "bg-gradient-to-t from-black/35 via-black/10 to-transparent",
        gradient === "strong" &&
          "bg-gradient-to-t from-black/55 via-black/20 to-transparent",
        className
      )}
      {...props}
    />
  )
);

Overlay.displayName = "MediaCard.Overlay";

/* =========================================
   Slots
========================================= */

const TopLeft = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="absolute left-4 top-4 z-10" {...props} />
);

const TopRight = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="absolute right-4 top-4 z-10" {...props} />
);

const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="p-pad-md" {...props} />
);

/* =========================================
   Export compound component
========================================= */

export const MediaCard = Object.assign(Root, {
  Media,
  Image,
  Overlay,
  TopLeft,
  TopRight,
  Footer,
});