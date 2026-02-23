import * as React from "react";
import { cn } from "@/shared/lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md";
};

export function Badge({ className, size = "md", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface/70 backdrop-blur px-3 font-medium",
        size === "sm" ? "h-7 text-xs" : "h-8 text-sm",
        className
      )}
      {...props}
    />
  );
}
