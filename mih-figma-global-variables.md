# MIH Landing Page — Global Variables (from Figma)

This document consolidates the global Figma Variables you shared (Layout, Typography, Responsive flags, Colors, Interactions) and provides a ready-to-use **CSS tokens template** + **Tailwind config mapping**.

---

## 1) Layout

### 1.1 Grid

| Token          | Desktop | Tablet | Mobile |
| -------------- | ------: | -----: | -----: |
| `pageWidth`    |    1920 |    834 |    393 |
| `columns`      |      12 |      8 |      4 |
| `columnW`      |      92 |      0 |      0 |
| `screenMargin` |      32 |     13 |     16 |
| `gridGutter`   |      32 |     24 |     16 |

### 1.2 Grid / content

| Token           | Desktop | Tablet | Mobile |
| --------------- | ------: | -----: | -----: |
| `containerMax`  |    1456 |    808 |      0 |
| `cardSm`        |     216 |    184 |      0 |
| `cardMd`        |     340 |    288 |      0 |
| `cardLg`        |     464 |    392 |      0 |
| `cardXL`        |     712 |    496 |      0 |
| `card-5col`     |     588 |    496 |      0 |
| `cardWide`      |     960 |    704 |      0 |
| `cardUltrawide` |    1208 |    808 |      0 |
| `heroMinH`      |     900 |    760 |    720 |

---

## 2) Typography

### 2.1 Font sizes

| Token     | Desktop | Tablet | Mobile |
| --------- | ------: | -----: | -----: |
| `display` |      64 |     56 |     48 |
| `h1`      |      56 |     48 |     36 |
| `h2`      |      40 |     36 |     28 |
| `h3`      |      32 |     28 |     24 |
| `h4`      |      24 |     22 |     20 |
| `bodyLg`  |      18 |     20 |     18 |
| `body`    |      16 |     16 |     16 |
| `bodySm`  |      14 |     14 |     14 |
| `caption` |      12 |     12 |     12 |

### 2.2 Line heights

| Token          | Desktop | Tablet | Mobile |
| -------------- | ------: | -----: | -----: |
| `displayLineH` |      72 |     72 |     56 |
| `h1LineH`      |      64 |     56 |     44 |
| `h2LineH`      |      48 |     44 |     36 |
| `h3LineH`      |      40 |     36 |     32 |
| `h4LineH`      |      28 |     30 |     28 |
| `bodyLgLineH`  |      28 |     28 |     26 |
| `bodyLineH`    |      20 |     24 |     24 |
| `bodySmLineH`  |      20 |     20 |     20 |
| `captionLineH` |      16 |     16 |     16 |

---

## 3) Responsive flags

### 3.1 Navigation

| Token           | Desktop | Tablet | Mobile |
| --------------- | ------- | ------ | ------ |
| `hasLinks`      | True    | False  | False  |
| `hasCTA`        | True    | False  | False  |
| `hasBurgerMenu` | False   | True   | True   |

---

## 4) Colors

### 4.1 Base / gray

| Step | Hex       |
| ---: | --------- |
|    0 | `#FFFFFF` |
|   50 | `#F9F9F9` |
|  100 | `#EBEBEB` |
|  200 | `#CCCCCC` |
|  300 | `#B0B0B0` |
|  400 | `#969696` |
|  500 | `#7C7C7C` |
|  600 | `#616161` |
|  700 | `#494949` |
|  800 | `#323232` |
|  900 | `#1B1B1B` |
|  950 | `#111111` |
| 1000 | `#000000` |

### 4.2 Base / brand / primary

| Step | Hex       |
| ---: | --------- |
|   50 | `#F8FDE8` |
|  100 | `#F0FAD1` |
|  200 | `#E1F6A2` |
|  300 | `#D2F174` |
|  400 | `#C4ED45` |
|  500 | `#B4E717` |
|  600 | `#91BA12` |
|  700 | `#6C8B0E` |
|  800 | `#485D09` |
|  900 | `#242E05` |
|  950 | `#121702` |

### 4.3 Base / brand / secondary

| Step | Hex       |
| ---: | --------- |
|   50 | `#CAFFE9` |
|  100 | `#62FFCC` |
|  200 | `#00EAB3` |
|  300 | `#00CE9E` |
|  400 | `#00B68B` |
|  500 | `#009C76` |
|  600 | `#008564` |
|  700 | `#006C51` |
|  800 | `#00543E` |
|  900 | `#003F2E` |
|  950 | `#002318` |

### 4.4 Semantic mappings

#### semantic / bg

- `page` → `base/gray/0`
- `surface` → `base/gray/50`
- `subtle` → `base/gray/100`
- `soft` → `base/gray/200`
- `strong` → `base/gray/950`
- `brand` → `base/brand/primary/500`
- `accentSky` → `#B4CDF6`
- `accentRose` → `#EEBFF9`
- `accentYellow` → `#F8E593`
- `accentMint` → `#B4F6C6`
- `accentRed` → `#FBBEB6`

#### semantic / border

- `subtle` → `base/gray/100`
- `default` → `base/gray/300`
- `strong` → `base/gray/950`

#### semantic / status (text color in your screenshots)

- `success` → `#FFFFFF`
- `warning` → `#FFFFFF`
- `error` → `#FFFFFF`
- `info` → `#FFFFFF`

#### semantic / action

- `tertiaryText` → `#FFFFFF`

##### semantic / action / primary

- `primary` → `base/brand/primary/500`
- `primaryText` → `base/gray/950`
- `primaryHover` → `base/brand/primary/500`

##### semantic / action / secondary

- `secondary` → `base/gray/100`
- `secondaryText` → `base/gray/950`
- `secondaryHover` → `base/gray/200`

##### semantic / action / inverse

- `inverse` → `base/gray/950`
- `inverseText` → `base/gray/0`
- `inverseHover` → `base/gray/950`

##### semantic / action / neutral

- `neutral` → `base/gray/0`
- `neutralText` → `base/gray/950`
- `neutralHover` → `base/gray/0`

#### semantic / text

- `primary` → `base/gray/950`
- `secondary` → `base/gray/700`
- `muted` → `base/gray/400`
- `inverse` → `base/gray/0`
- `accent` → `base/brand/primary/500`

---

## 5) Interactions

- `popupVisible` → `True`

---

# Implementation (copy/paste)

## A) `src/styles/tokens.css` (template)

> This sets **default = Desktop**, then overrides variables for Tablet/Mobile via media queries.  
> You can merge this into your existing tokens file (padding/radius/gap/icon etc. can stay where they already are).

```css
:root {
  /* Breakpoints (docs) */
  --bp-tablet: 834px;
  --bp-mobile: 393px;

  /* ========== Layout / grid (Desktop defaults) ========== */
  --grid-pageWidth: 1920;
  --grid-columns: 12;
  --grid-columnW: 92;
  --screen-margin: 32;
  --grid-gutter: 32;

  /* grid / content */
  --grid-content-containerMax: 1456;
  --grid-content-cardSm: 216;
  --grid-content-cardMd: 340;
  --grid-content-cardLg: 464;
  --grid-content-cardXL: 712;
  --grid-content-card-5col: 588;
  --grid-content-cardWide: 960;
  --grid-content-cardUltrawide: 1208;
  --grid-content-heroMinH: 900;

  /* ========== Typography (Desktop defaults) ========== */
  --type-display: 64px;
  --type-h1: 56px;
  --type-h2: 40px;
  --type-h3: 32px;
  --type-h4: 24px;
  --type-bodyLg: 18px;
  --type-body: 16px;
  --type-bodySm: 14px;
  --type-caption: 12px;

  --type-displayLineH: 72px;
  --type-h1LineH: 64px;
  --type-h2LineH: 48px;
  --type-h3LineH: 40px;
  --type-h4LineH: 28px;
  --type-bodyLgLineH: 28px;
  --type-bodyLineH: 20px;
  --type-bodySmLineH: 20px;
  --type-captionLineH: 16px;

  /* ========== Base colors ========== */
  --base-gray-0: #ffffff;
  --base-gray-50: #f9f9f9;
  --base-gray-100: #ebebeb;
  --base-gray-200: #cccccc;
  --base-gray-300: #b0b0b0;
  --base-gray-400: #969696;
  --base-gray-500: #7c7c7c;
  --base-gray-600: #616161;
  --base-gray-700: #494949;
  --base-gray-800: #323232;
  --base-gray-900: #1b1b1b;
  --base-gray-950: #111111;
  --base-gray-1000: #000000;

  --base-brand-primary-50: #f8fde8;
  --base-brand-primary-100: #f0fad1;
  --base-brand-primary-200: #e1f6a2;
  --base-brand-primary-300: #d2f174;
  --base-brand-primary-400: #c4ed45;
  --base-brand-primary-500: #b4e717;
  --base-brand-primary-600: #91ba12;
  --base-brand-primary-700: #6c8b0e;
  --base-brand-primary-800: #485d09;
  --base-brand-primary-900: #242e05;
  --base-brand-primary-950: #121702;

  --base-brand-secondary-50: #caffe9;
  --base-brand-secondary-100: #62ffcc;
  --base-brand-secondary-200: #00eab3;
  --base-brand-secondary-300: #00ce9e;
  --base-brand-secondary-400: #00b68b;
  --base-brand-secondary-500: #009c76;
  --base-brand-secondary-600: #008564;
  --base-brand-secondary-700: #006c51;
  --base-brand-secondary-800: #00543e;
  --base-brand-secondary-900: #003f2e;
  --base-brand-secondary-950: #002318;

  /* ========== Semantic aliases (your Tailwind reads these) ========== */
  /* semantic/bg */
  --semantic-bg-page: var(--base-gray-0);
  --semantic-bg-surface: var(--base-gray-50);
  --semantic-bg-subtle: var(--base-gray-100);
  --semantic-bg-soft: var(--base-gray-200);
  --semantic-bg-strong: var(--base-gray-950);
  --semantic-bg-brand: var(--base-brand-primary-500);

  --semantic-bg-accentSky: #b4cdf6;
  --semantic-bg-accentRose: #eebff9;
  --semantic-bg-accentYellow: #f8e593;
  --semantic-bg-accentMint: #b4f6c6;
  --semantic-bg-accentRed: #fbbeb6;

  /* semantic/border */
  --semantic-border-subtle: var(--base-gray-100);
  --semantic-border-default: var(--base-gray-300);
  --semantic-border-strong: var(--base-gray-950);

  /* semantic/text */
  --semantic-text-primary: var(--base-gray-950);
  --semantic-text-secondary: var(--base-gray-700);
  --semantic-text-muted: var(--base-gray-400);
  --semantic-text-inverse: var(--base-gray-0);
  --semantic-text-accent: var(--base-brand-primary-500);

  /* semantic/action */
  --semantic-action-tertiartyText: #ffffff;

  /* action/primary */
  --semantic-action-primary-primary: var(--base-brand-primary-500);
  --semantic-action-primary-primaryText: var(--base-gray-950);
  --semantic-action-primary-primaryHover: var(--base-brand-primary-500);

  /* action/secondary */
  --semantic-action-secondary-secondary: var(--base-gray-100);
  --semantic-action-secondary-secondaryText: var(--base-gray-950);
  --semantic-action-secondary-secondaryHover: var(--base-gray-200);

  /* action/inverse */
  --semantic-action-inverse-inverse: var(--base-gray-950);
  --semantic-action-inverse-inverseText: var(--base-gray-0);
  --semantic-action-inverse-inverseHover: var(--base-gray-950);

  /* action/neutral */
  --semantic-action-neutral-neutral: var(--base-gray-0);
  --semantic-action-neutral-neutralText: var(--base-gray-950);
  --semantic-action-neutral-neutralHover: var(--base-gray-0);

  /* status (text) */
  --semantic-status-success: #ffffff;
  --semantic-status-warning: #ffffff;
  --semantic-status-error: #ffffff;
  --semantic-status-info: #ffffff;

  /* responsive flags (optional, if you want them in CSS) */
  --nav-hasLinks: 1; /* desktop true */
  --nav-hasCTA: 1; /* desktop true */
  --nav-hasBurgerMenu: 0; /* desktop false */

  /* interactions */
  --popup-visible: 1; /* True */
}

/* Tablet overrides */
@media (max-width: 834px) {
  :root {
    --grid-pageWidth: 834;
    --grid-columns: 8;
    --grid-columnW: 0;
    --screen-margin: 13;
    --grid-gutter: 24;

    --grid-content-containerMax: 808;
    --grid-content-cardSm: 184;
    --grid-content-cardMd: 288;
    --grid-content-cardLg: 392;
    --grid-content-cardXL: 496;
    --grid-content-card-5col: 496;
    --grid-content-cardWide: 704;
    --grid-content-cardUltrawide: 808;
    --grid-content-heroMinH: 760;

    --type-display: 56px;
    --type-h1: 48px;
    --type-h2: 36px;
    --type-h3: 28px;
    --type-h4: 22px;
    --type-bodyLg: 20px;
    --type-body: 16px;
    --type-bodySm: 14px;
    --type-caption: 12px;

    --type-displayLineH: 72px;
    --type-h1LineH: 56px;
    --type-h2LineH: 44px;
    --type-h3LineH: 36px;
    --type-h4LineH: 30px;
    --type-bodyLgLineH: 28px;
    --type-bodyLineH: 24px;
    --type-bodySmLineH: 20px;
    --type-captionLineH: 16px;

    --nav-hasLinks: 0;
    --nav-hasCTA: 0;
    --nav-hasBurgerMenu: 1;
  }
}

/* Mobile overrides */
@media (max-width: 393px) {
  :root {
    --grid-pageWidth: 393;
    --grid-columns: 4;
    --grid-columnW: 0;
    --screen-margin: 16;
    --grid-gutter: 16;

    --grid-content-containerMax: 0;
    --grid-content-cardSm: 0;
    --grid-content-cardMd: 0;
    --grid-content-cardLg: 0;
    --grid-content-cardXL: 0;
    --grid-content-card-5col: 0;
    --grid-content-cardWide: 0;
    --grid-content-cardUltrawide: 0;
    --grid-content-heroMinH: 720;

    --type-display: 48px;
    --type-h1: 36px;
    --type-h2: 28px;
    --type-h3: 24px;
    --type-h4: 20px;
    --type-bodyLg: 18px;
    --type-body: 16px;
    --type-bodySm: 14px;
    --type-caption: 12px;

    --type-displayLineH: 56px;
    --type-h1LineH: 44px;
    --type-h2LineH: 36px;
    --type-h3LineH: 32px;
    --type-h4LineH: 28px;
    --type-bodyLgLineH: 26px;
    --type-bodyLineH: 24px;
    --type-bodySmLineH: 20px;
    --type-captionLineH: 16px;

    --nav-hasLinks: 0;
    --nav-hasCTA: 0;
    --nav-hasBurgerMenu: 1;
  }
}
```

## B) Tailwind config mapping (`tailwind.config.ts`)

> Your current config is already close. Below is a cleaned-up version that:
>
> - keeps your `screens`
> - maps **typography** to CSS variables (so it becomes responsive automatically via the media queries above)
> - keeps your `colors`, `radius`, `spacing`, icons, etc.

```ts
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
      screens: {
        tablet: { max: "834px" },
        mobile: { max: "393px" },
      },

      fontSize: {
        display: ["var(--type-display)", { lineHeight: "var(--type-displayLineH)" }],
        h1: ["var(--type-h1)", { lineHeight: "var(--type-h1LineH)" }],
        h2: ["var(--type-h2)", { lineHeight: "var(--type-h2LineH)" }],
        h3: ["var(--type-h3)", { lineHeight: "var(--type-h3LineH)" }],
        h4: ["var(--type-h4)", { lineHeight: "var(--type-h4LineH)" }],
        bodyLg: ["var(--type-bodyLg)", { lineHeight: "var(--type-bodyLgLineH)" }],
        body: ["var(--type-body)", { lineHeight: "var(--type-bodyLineH)" }],
        bodySm: ["var(--type-bodySm)", { lineHeight: "var(--type-bodySmLineH)" }],
        caption: ["var(--type-caption)", { lineHeight: "var(--type-captionLineH)" }],
      },

      colors: {
        bg: {
          page: "var(--semantic-bg-page)",
          surface: "var(--semantic-bg-surface)",
          subtle: "var(--semantic-bg-subtle)",
          soft: "var(--semantic-bg-soft)",
          strong: "var(--semantic-bg-strong)",
          brand: "var(--semantic-bg-brand)",
        },
        text: {
          primary: "var(--semantic-text-primary)",
          secondary: "var(--semantic-text-secondary)",
          muted: "var(--semantic-text-muted)",
          inverse: "var(--semantic-text-inverse)",
          accent: "var(--semantic-text-accent)",
        },
        border: {
          subtle: "var(--semantic-border-subtle)",
          default: "var(--semantic-border-default)",
          strong: "var(--semantic-border-strong)",
        },
        action: {
          primary: "var(--semantic-action-primary-primary)",
          primaryText: "var(--semantic-action-primary-primaryText)",
          primaryHover: "var(--semantic-action-primary-primaryHover)",

          secondary: "var(--semantic-action-secondary-secondary)",
          secondaryText: "var(--semantic-action-secondary-secondaryText)",
          secondaryHover: "var(--semantic-action-secondary-secondaryHover)",

          inverse: "var(--semantic-action-inverse-inverse)",
          inverseText: "var(--semantic-action-inverse-inverseText)",
          inverseHover: "var(--semantic-action-inverse-inverseHover)",

          neutral: "var(--semantic-action-neutral-neutral)",
          neutralText: "var(--semantic-action-neutral-neutralText)",
          neutralHover: "var(--semantic-action-neutral-neutralHover)",
        },
        status: {
          success: "var(--semantic-status-success)",
          warning: "var(--semantic-status-warning)",
          error: "var(--semantic-status-error)",
          info: "var(--semantic-status-info)",
        },
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        xxl: "var(--radius-xxl)",
        round: "var(--radius-round)",
      },

      spacing: {
        /* your existing padding + gap tokens */
        "pad-xs": "var(--padding-padXS)",
        "pad-sm": "var(--padding-padSm)",
        "pad-md": "var(--padding-padMd)",
        "pad-lg": "var(--padding-padLg)",
        "pad-xl": "var(--padding-padXL)",
        "pad-xxl": "var(--padding-padXXL)",
        section: "var(--padding-padSection)",

        screen: "var(--screen-margin)",

        "gap-xxs": "var(--gap-gapXXS)",
        "gap-xs": "var(--gap-gapXS)",
        "gap-sm": "var(--gap-gapSm)",
        "gap-md": "var(--gap-gapMd)",
        "gap-lg": "var(--gap-gapLg)",
        "gap-xl": "var(--gap-gapXL)",
        "gap-xxl": "var(--gap-gapXXL)",
        "gap-section": "var(--gap-gapSection)",
      },

      maxWidth: {
        container: "var(--grid-content-containerMax, var(--container-max))",
      },

      width: {
        "icon-sm": "var(--icon-sm)",
        "icon-md": "var(--icon-md)",
        "icon-lg": "var(--icon-lg)",
        "icon-xl": "var(--icon-xl)",
        "icon-xxl": "var(--icon-xxl)",
      },
      height: {
        "icon-sm": "var(--icon-sm)",
        "icon-md": "var(--icon-md)",
        "icon-lg": "var(--icon-lg)",
        "icon-xl": "var(--icon-xl)",
        "icon-xxl": "var(--icon-xxl)",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace"],
      },
    },
  },

  plugins: [],
} satisfies Config;
```

## C) CSS entry file (as you already had)

```css
@config "../../tailwind.config.ts";
@import "tailwindcss";

/* ✅ Safelist for classes Tailwind can’t statically detect */
@source inline("bg-action-primary text-action-primaryText bg-action-inverse text-action-inverseText");
@source inline("bg-bg-page text-text-primary text-text-muted border-border-default");
@source inline("px-pad-xs px-pad-sm px-pad-md px-pad-lg px-pad-xl px-pad-xxl");
@source inline("py-pad-xs py-pad-sm py-pad-md py-pad-lg py-pad-xl py-pad-xxl");

@import "../styles/tokens.css";

html {
  font-family: var(--font-sans), ui-sans-serif, system-ui;
}

body {
  margin: 0;
  padding: 0;
  background: var(--semantic-bg-page);
  color: var(--semantic-text-primary);
  font-family: var(--font-sans), ui-sans-serif, system-ui;
}

code,
pre {
  font-family: var(--font-mono), ui-monospace, monospace;
}

* {
  box-sizing: border-box;
}
```

---

## Quick sanity test (copy/paste)

```html
<div class="bg-bg-page text-text-primary p-pad-lg">
  <h1 class="text-h1">Heading</h1>
  <p class="text-body text-text-muted">Muted body text.</p>

  <button
    class="mt-gap-md inline-flex items-center justify-center gap-2 rounded-round bg-action-primary px-pad-md py-pad-sm text-action-primaryText"
  >
    Primary
  </button>

  <button
    class="mt-gap-md inline-flex items-center justify-center gap-2 rounded-round bg-action-inverse px-pad-md py-pad-sm text-action-inverseText"
  >
    Inverse
  </button>
</div>
```

If you want, I can also generate a **ready-to-commit** `tokens.css` that merges your existing padding/radius/gap/icon values (you only need to paste that file here).
