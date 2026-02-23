import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // keep your semantic colors as CSS vars (so design system colors still work)
      colors: {
        bg: {
          page: "var(--semantic-bg-page)",
          surface: "var(--semantic-bg-surface, var(--semantic-bg-page))",
        },
        text: {
          primary: "var(--semantic-text-primary)",
          muted: "var(--semantic-text-muted)",
          inverse: "var(--semantic-text-inverse, #fff)",
        },
        border: {
          default: "var(--semantic-border-default)",
        },
        action: {
          primary: "var(--semantic-action-primary-primary)",
          primaryText: "var(--semantic-action-primary-primaryText)",
          primaryHover:
            "var(--semantic-action-primary-primaryHover, var(--semantic-action-primary-primary))",
        
          secondary: "var(--semantic-action-secondary-secondary, #f5f5f5)",
          secondaryText:
            "var(--semantic-action-secondary-secondaryText, var(--semantic-text-primary))",
          secondaryHover: "var(--semantic-action-secondary-secondaryHover, #e6e6e6)",
        
          inverse: "var(--semantic-action-inverse-inverse)",
          inverseText: "var(--semantic-action-inverse-inverseText)",
          inverseHover:
            "var(--semantic-action-inverse-inverseHover, var(--semantic-action-inverse-inverse))",
        
          neutral: "var(--semantic-action-neutral-neutral, transparent)",
          neutralText:
            "var(--semantic-action-neutral-neutralText, var(--semantic-text-primary))",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      borderRadius: {
        // keep if you like, but Tailwind defaults are fine too
        round: "9999px",
      },
    },
  },

  plugins: [],
} satisfies Config;