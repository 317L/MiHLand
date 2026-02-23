import localFont from "next/font/local";

/**
 * Global Sans Font
 * Sequel Sans
 */
export const sequelSans = localFont({
  src: [
    {
      path: "../../../assets/fonts/SequelSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/SequelSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../assets/fonts/SequelSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});


export const sequelMono = localFont({
  src: [
    {
      path: "../../../assets/fonts/SequelSans-Mono.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});
