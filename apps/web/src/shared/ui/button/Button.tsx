"use client";

import React, { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { UIRounded, UISize, UIVariant } from "@/shared/design/variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: UIVariant;
  size?: UISize;
  rounded?: UIRounded;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const BASE =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page";

const VARIANT: Record<UIVariant, string> = {
  outline:
    "border border-border-default bg-transparent text-text-primary hover:bg-border-default/10",
  ghost: "bg-transparent text-text-primary hover:bg-border-default/10",
  danger: "bg-red-600 text-white hover:bg-red-700",
  inverse: "bg-action-inverse text-action-inverseText hover:bg-action-inverseHover",
primary: "bg-action-primary text-action-primaryText hover:bg-action-primaryHover",
secondary: "bg-action-secondary text-action-secondaryText hover:bg-action-secondaryHover",
};

const SIZE: Record<UISize, string> = {
  sm: "px-pad-sm py-pad-xs text-sm",
  md: "px-pad-md py-pad-sm text-sm",
  lg: "px-pad-lg py-pad-md text-base",
};

const ROUNDED: Record<UIRounded, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const ICON_WRAP = "flex shrink-0";

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      rounded = "full",
      iconLeft,
      iconRight,
      className,
      children,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(BASE, VARIANT[variant], SIZE[size], ROUNDED[rounded], className)}
        {...props}
      >
        {iconLeft ? <span className={ICON_WRAP}>{iconLeft}</span> : null}
        <span className="truncate">{children}</span>
        {iconRight ? <span className={ICON_WRAP}>{iconRight}</span> : null}
      </button>
    );
  }
);

ButtonComponent.displayName = "Button";
export const Button = memo(ButtonComponent);

/*
USAGE:

import { Button } from "@/shared/ui/Button";

<Button>Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="inverse">Inverse</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

<Button rounded="md">Rounded</Button>
*/
