"use client";

import React, { memo } from "react";
import { cn } from "@/shared/lib/cn";
import type { IconName, IconSize } from "./icon.types";
import { ICON_SIZE_CLASS } from "./icon.types";
import { FooterLinkIcon, IECIcon, ISOIcon, LanguageIcon } from "./icons";

const REGISTRY: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  footerLink: FooterLinkIcon,
  iec: IECIcon,
  iso: ISOIcon,
  language: LanguageIcon,
};

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: IconName;
  icon?: React.ReactNode;
  size?: IconSize;
  svgProps?: React.SVGProps<SVGSVGElement>;
  tooltip?: string;
}

const IconComponent = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ name, icon, size = "sm", svgProps, tooltip, className, ...props }, ref) => {
    const Svg = name ? REGISTRY[name] : null;

    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        title={tooltip}
        aria-label={tooltip}
        {...props}
      >
        {icon ? (
          icon
        ) : Svg ? (
          <Svg {...svgProps} className={cn(ICON_SIZE_CLASS[size], svgProps?.className)} />
        ) : null}
      </span>
    );
  }
);

IconComponent.displayName = "Icon";
export const Icon = memo(IconComponent);
