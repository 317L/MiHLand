export type IconName = "footerLink" | "iec" | "iso" | "language";

export type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";

export const ICON_SIZE_CLASS: Record<IconSize, string> = {
  sm: "w-icon-sm h-icon-sm",
  md: "w-icon-md h-icon-md",
  lg: "w-icon-lg h-icon-lg",
  xl: "w-icon-xl h-icon-xl",
  xxl: "w-icon-xxl h-icon-xxl",
};
