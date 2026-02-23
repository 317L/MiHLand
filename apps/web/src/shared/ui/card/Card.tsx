import * as React from "react";
import { cn } from "@/shared/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-sm bg-surface text-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

type SectionProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-pad-md", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-pad-md pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-pad-md pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
