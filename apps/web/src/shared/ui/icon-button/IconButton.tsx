import * as React from "react";
import { cn } from "@/shared/lib/cn";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md";
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-border bg-surface/70 backdrop-blur transition",
          "hover:bg-surface/90 active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          size === "sm" ? "h-9 w-9" : "h-10 w-10",
          className
        )}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";
