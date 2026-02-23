/**
 * Global UI design enums (variant / size / radius)
 * Koriste se u Button, Accordion, Badge itd.
 */

export const UI_VARIANT = {
    primary: "primary",
    outline: "outline",
    inverse: "inverse",
    ghost: "ghost",
    danger: "danger",
    secondary: "secondary"
  } as const;
  
  export type UIVariant = keyof typeof UI_VARIANT;
  
  export const UI_SIZE = {
    sm: "sm",
    md: "md",
    lg: "lg",
  } as const;
  
  export type UISize = keyof typeof UI_SIZE;
  
  export const UI_ROUNDED = {
    sm: "sm",
    md: "md",
    lg: "lg",
    full: "full",
  } as const;
  
  export type UIRounded = keyof typeof UI_ROUNDED;
  
  export function isUIVariant(v: unknown): v is UIVariant {
    return typeof v === "string" && v in UI_VARIANT;
  }
  
  export function isUISize(v: unknown): v is UISize {
    return typeof v === "string" && v in UI_SIZE;
  }
  
  export function isUIRounded(v: unknown): v is UIRounded {
    return typeof v === "string" && v in UI_ROUNDED;
  }
  