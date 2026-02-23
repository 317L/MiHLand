"use client";

import React, { memo } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/shared/lib/cn";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
>;

export interface AppLinkProps extends LinkProps, AnchorProps {
  children?: React.ReactNode;

  /**
   * Ako je true, tretira se kao social link (ikonica, aria-label obavezan, drugačiji padding/hover)
   */
  isSocial?: boolean;

  /**
   * Proslijedi bilo koju ikonicu (npr. <Icon .../> ili <LinkedInIcon />)
   */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;

  /**
   * Koristi za social linkove (pošto često nema texta)
   */
  ariaLabel?: string;

  /**
   * Otvori u novom tabu (default true za social)
   */
  external?: boolean;

  variant?: "inverse" | "primary" | "neutral";
  size?: "bodySm" | "body" | "bodyLg";
  underline?: "none" | "hover" | "always";
}

const BASE =
  "inline-flex items-center gap-2 font-normal transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-bg-page";

const VARIANT: Record<NonNullable<AppLinkProps["variant"]>, string> = {
  inverse: "text-action-inverse hover:text-action-inverseHover",
  primary: "text-action-primary hover:text-action-primaryHover",
  neutral: "text-action-neutral hover:text-action-neutralHover",
};

const SIZE: Record<NonNullable<AppLinkProps["size"]>, string> = {
  bodySm: "text-bodySm",
  body: "text-body",
  bodyLg: "text-bodyLg",
};

const UNDERLINE: Record<NonNullable<AppLinkProps["underline"]>, string> = {
  none: "no-underline",
  hover: "no-underline hover:underline",
  always: "underline",
};

const ICON_WRAP = "flex shrink-0";

const SOCIAL =
  "rounded-full px-pad-sm py-pad-xs " +
  "hover:bg-border-default/10 active:scale-[0.98]";

const AppLinkComponent = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  (
    {
      children,
      className,
      variant = "inverse",
      size = "bodySm",
      underline = "hover",
      isSocial = false,
      iconLeft,
      iconRight,
      ariaLabel,
      external,
      ...props
    },
    ref
  ) => {
    const isExternal = external ?? isSocial;

    // Social link bez teksta -> mora imati aria label
    const computedAriaLabel =
      ariaLabel ?? (typeof children === "string" ? children : undefined);

    return (
      <Link
        ref={ref}
        className={cn(
          BASE,
          VARIANT[variant],
          SIZE[size],
          UNDERLINE[underline],
          isSocial ? SOCIAL : null,
          className
        )}
        aria-label={isSocial ? computedAriaLabel : undefined}
        target={isExternal ? "_blank" : props.target}
        rel={isExternal ? "noreferrer noopener" : props.rel}
        {...props}
      >
        {iconLeft ? <span className={ICON_WRAP}>{iconLeft}</span> : null}

        {/* Ako je social i nema children, to je ok (samo ikona) */}
        {children ? <span className="truncate">{children}</span> : null}

        {iconRight ? <span className={ICON_WRAP}>{iconRight}</span> : null}
      </Link>
    );
  }
);

AppLinkComponent.displayName = "AppLink";
export const AppLink = memo(AppLinkComponent);

/*
DOCUMENTATION / USAGE:

1) Normal link (tekst)
import { AppLink } from "@/shared/ui/AppLink";

<AppLink href="/how-we-work">
  How we work
</AppLink>

2) Social link (samo ikona)
import { AppLink } from "@/shared/ui/AppLink";
import { Icon } from "@/shared/ui/Icon";
import XSvg from "@/shared/assets/icons/X.svg";

<AppLink
  href="https://x.com/MIH"
  isSocial
  ariaLabel="MIH on X"
  iconLeft={<Icon icon={<XSvg className="w-icon-sm h-icon-sm" />} tooltip="X" />}
/>

3) Social link (ikona + tekst ako hoćeš)
<AppLink
  href="https://linkedin.com/company/MIH"
  isSocial
  ariaLabel="MIH on LinkedIn"
  iconLeft={<LinkedInSvg className="w-icon-sm h-icon-sm" />}
>
  LinkedIn
</AppLink>

NOTES:
- isSocial -> default external target=_blank + rel noopener
- ariaLabel preporučen za social linkove (pogotovo kad nema texta)
*/
