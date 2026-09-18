# Rite Consult — Design System (Phase 1)

Technology. Digital Solutions. Business Growth.

This document is the visual foundation for the Rite Consult website. Everything in the future homepage and service pages should be built from these decisions rather than re-deriving them per page.

---

## 1. Brand Design Direction

Rite Consult sits at the intersection of a strategy consultancy and a technology studio. The design language borrows from editorial publications and architecture studios rather than SaaS product marketing: strong serif typography for ideas, a restrained sans-serif for systems and structure, generous whitespace, and a single considered accent color rather than a gradient system.

Personality: intelligent, calm, mature, editorial, premium, practical. The design should read as a firm with strong taste, not a startup landing page — no glowing blobs, no AI-brain imagery, no dashboard mockups, no stock handshake photography.

---

## 2. Color Palette

| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#1B1B18` | Primary text on light backgrounds; dark section background |
| `ink-800` | `#33322C` | Secondary dark surface (raised panels within dark sections) |
| `paper-50` | `#F6F4EF` | Primary (light) background; primary text on dark backgrounds |
| `paper-100` | `#EDEAE1` | Secondary background — card fills, alternating sections |
| `stone-600` | `#57564C` | Secondary text on light backgrounds |
| `stone-400` | `#8B8879` | Muted text on light backgrounds |
| `stone-300` (on dark) | `#C8C5B8` | Secondary text on dark backgrounds |
| `stone-500` (on dark) | `#94917F` | Muted text on dark backgrounds |
| `border-light` | `#DEDACE` | Borders and dividers on light backgrounds |
| `border-dark` | `rgba(246,244,239,0.14)` | Borders and dividers on dark backgrounds |
| `accent` | `#2F6B52` | Links, focus states, primary hover, small highlights on light bg |
| `accent-hover` | `#24503F` | Hover/active state for accent on light bg |
| `accent-on-dark` | `#5FA383` | Accent usage on dark backgrounds (links, highlights) |
| `accent-on-dark-hover` | `#79B89B` | Hover/active state for accent on dark bg |

Rationale: warm ink and warm paper instead of a cold black/white pair; one deep, muted green as the sole accent — distinct from the purple/blue gradients and terracotta/near-black-plus-neon combinations common in AI-generated sites, and from the navy/purple used by larger consulting incumbents.

Contrast notes: Ink-950 on Paper-50 exceeds 15:1. Accent (`#2F6B52`) on Paper-50 is ≈5.2:1 (passes AA for body text). Accent-on-dark (`#5FA383`) on Ink-950 is ≈5.4:1. Stone-600 on Paper-50 is ≈7:1. All body-text pairings meet WCAG AA; verify final pairings with a contrast tool once real content/imagery is in place.

---

## 3. Typography System

**Families:** Source Serif 4 (display, H1, H2, large numerals) · IBM Plex Sans (H3 down, body, UI, navigation). Two families only, each with a distinct job — serif for ideas and headlines, sans for structure and interface.

| Role | Family | Weight | Size (desktop / mobile) | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display (hero) | Source Serif 4 | 600 | 72px / 40px | 1.05 | -0.01em |
| H1 | Source Serif 4 | 600 | 56px / 34px | 1.1 | -0.01em |
| H2 | Source Serif 4 | 600 | 40px / 28px | 1.15 | -0.005em |
| H3 | IBM Plex Sans | 600 | 24px / 20px | 1.3 | 0 |
| H4 | IBM Plex Sans | 600 | 18px / 17px | 1.4 | 0 |
| Body large | IBM Plex Sans | 400 | 20px / 18px | 1.6 | 0 |
| Body | IBM Plex Sans | 400 | 17px / 16px | 1.65 | 0 |
| Small | IBM Plex Sans | 400 | 14px / 14px | 1.5 | 0 |
| Navigation | IBM Plex Sans | 500 | 15px | 1.4 | 0.01em |
| Buttons | IBM Plex Sans | 500 | 15px | 1 | 0.01em |
| Eyebrow / label | IBM Plex Sans | 500 | 13px | 1.4 | 0.02em, sentence case (not all-caps) |
| Numbers / stats | Source Serif 4 | 500 | 56px / 40px | 1 | 0, oldstyle proportional figures |

Body copy is set to a measure of 66–75 characters (~640px max width). No word or phrase within a headline is ever isolated in italic, a different weight, or a different color — headline color and weight are uniform.

---

## 4. Spacing Scale

Base unit: 4px.

| Token | Value |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 80px |
| Section spacing (desktop) | 128px |
| Section spacing (mobile) | 64px |
| Container padding (desktop) | 80px |
| Container padding (tablet) | 48px |
| Container padding (mobile) | 24px |

---

## 5. Container / Grid System

- Max content width: 1280px
- Desktop container: 1280px, 80px side padding
- Tablet container: fluid, 48px side padding
- Mobile container: fluid, 24px side padding
- Grid: 12 columns / 24px gutter (desktop) · 8 columns / 20px gutter (tablet) · 4 columns / 16px gutter (mobile)
- Text width limit: 640–680px for body paragraphs

Not every section is centered. The system supports full-bleed dark sections, asymmetric two-column splits (e.g. 7/5 or 8/4 column splits), and single-column editorial sections for long-form copy.

---

## 6. Button System

| Property | Primary — "Start a Conversation" | Secondary — "Explore Our Services" |
|---|---|---|
| Height | 48px | 48px |
| Padding | 0 28px | 0 28px |
| Background | `ink-950` | transparent |
| Text | `paper-50` | `ink-950` |
| Border | 1px solid `ink-950` | 1.5px solid `border-light` |
| Radius | 3px | 3px |
| Hover | bg → `accent`, border → `accent` | border/text → `accent` |
| Focus-visible | 2px `accent` outline, 2px offset | 2px `accent` outline, 2px offset |
| Disabled | 40% opacity, no pointer events | 40% opacity, no pointer events |

No pill shapes, no gradients, no glow on hover — state changes are limited to color and border.

---

## 7. Navigation Rules

**Desktop:** Sticky header, 88px tall, transparent over the hero, gaining a `paper-50` background and 1px bottom border after ~40px of scroll (200ms transition). Logo/wordmark left, six primary links center-right, primary CTA button far right. Link hover/focus draws a 2px underline left-to-right (200ms) rather than changing color alone.

**Mobile:** Not a shrunk desktop bar. A custom two-line icon (morphing to a close mark) opens a full-height slide-in panel with large, stacked serif links, a close control top-right, and the CTA pinned to the bottom of the panel.

---

## 8. Card Rules

Cards are used only where they organize genuinely comparable items (e.g. a set of client outcomes), not as the default container for everything. When used: 1px `border-light`/`border-dark`, 3px radius, no drop shadow, generous internal padding (24–32px), background `paper-50` or `paper-100`. Hover state (if the card is a link) shifts the border color only — no lift, no shadow, no scale. Sections like "Our Approach" deliberately avoid cards in favor of a numbered, rule-divided list, because that content is a sequence rather than a comparison set.

---

## 9. Border / Radius Rules

- Radius scale: 3px (buttons, cards, inputs) — no larger radii, no pill shapes anywhere
- Border weight: 1px for dividers/cards, 1.5px for interactive outlines (secondary button, inputs)
- Borders are the primary structural device; shadows are avoided in favor of borders wherever elevation isn't strictly needed

---

## 10. Shadow Rules

Shadows are used only where real elevation is implied — a scrolled sticky header or an open mobile menu panel — at a single subtle value: `0 4px 16px rgba(27,27,24,0.08)`. No shadow is used under cards, buttons, or images as decoration.

---

## 11. Icon Rules

A single custom line-icon set: 24px grid, 1.5px stroke, no fill, rounded joins. Icons appear only where they carry real meaning (menu open/close, external link, form states) — never decoratively beside headings or body copy.

---

## 12. Image / Visual Direction

No generic stock photography and no fabricated client logos, testimonials, or project screenshots. The visual language instead draws on:
- Structured diagrams (systems, workflows, connected ideas) rendered in the brand palette
- Typography-as-image treatments (large numerals, pull quotes)
- Subtle technical line drawings / grid motifs
- Real project screenshots and photography once actual client work exists

---

## 13. Animation Principles

- Duration scale: fast 120ms, base 200ms, slow 400ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- One orchestrated moment: a staggered hero entrance (eyebrow → headline → subhead → CTA, ~80ms apart), used once per page load
- Interaction feedback only elsewhere: color/background transitions on hover and focus, underline draws on links
- No parallax, no bounce, no continuous motion, no per-section scroll-reveal on every element
- `prefers-reduced-motion: reduce` disables translation and staggering; opacity-only or instant state changes remain

---

## 14. Responsive Rules

| Breakpoint | Range | Notes |
|---|---|---|
| Mobile | < 640px | Single column, 24px padding, stacked nav panel, display type drops to 40px |
| Tablet | 640–1023px | 8-col grid, 48px padding, nav may collapse to mobile pattern below ~880px |
| Desktop | 1024–1439px | Full 12-col grid, 80px padding, full nav |
| Large desktop | ≥ 1440px | Content stays capped at 1280px, extra space becomes margin, not larger type |

Mobile is designed directly (larger touch targets, stacked asymmetric sections become single-column in a considered order) rather than derived by shrinking desktop.

---

## 15. Accessibility Rules

- Color pairings verified for WCAG AA (see Section 2)
- Visible focus states on every interactive element (2px accent outline, 2px offset) — never removed, only restyled
- Body text never below 14px; line-height never below 1.4
- Semantic HTML throughout: `header`, `nav`, `main`, `section`, `footer`, proper heading order
- Buttons are real `<button>`/`<a>` elements, never `<div>` with a click handler
- `prefers-reduced-motion` respected site-wide

---

## 16. SEO Foundation

- One `<h1>` per page; `<h2>` for major section titles; `<h3>` for sub-groupings; `<h4>` reserved for card/list-item titles
- Sections wrapped in semantic `<section>` elements with descriptive `aria-label` where the heading isn't sufficient
- Body copy held to the 640–680px readable measure
- Images: descriptive, natural-language alt text for meaningful images; `alt=""` for purely decorative ones
- Inline text links are underlined on hover/focus for clarity; standalone nav/button links rely on button styling instead — no keyword stuffing, no hidden text

---

## 17. Tailwind / Design Token Structure

```js
// tailwind.config.js (extend)
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: { 950: '#1B1B18', 800: '#33322C' },
        paper: { 50: '#F6F4EF', 100: '#EDEAE1' },
        stone: { 300: '#C8C5B8', 400: '#8B8879', 500: '#94917F', 600: '#57564C' },
        border: { light: '#DEDACE', dark: 'rgba(246,244,239,0.14)' },
        accent: {
          DEFAULT: '#2F6B52',
          hover: '#24503F',
          dark: '#5FA383',
          'dark-hover': '#79B89B',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      spacing: {
        xs: '4px', sm: '8px', md: '16px', lg: '24px',
        xl: '32px', '2xl': '48px', '3xl': '80px',
      },
      borderRadius: { DEFAULT: '3px' },
      boxShadow: {
        elevate: '0 4px 16px rgba(27,27,24,0.08)',
      },
      screens: {
        sm: '640px', md: '1024px', lg: '1440px',
      },
      transitionDuration: {
        fast: '120ms', DEFAULT: '200ms', slow: '400ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        container: '1280px',
        measure: '680px',
      },
    },
  },
};
```

---

*Next: a design-system preview page (see `design-system-preview.html`) demonstrates every token above in context. Phase 2 will apply this system to the homepage.*
