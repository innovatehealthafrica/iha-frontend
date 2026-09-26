# InnovateHealth Africa (IHA) — Brand Guide Prompt for Coding Agents

Copy everything below the line into the system prompt or first message of any
coding agent building an IHA sub-domain site. Values were extracted from the
main site repository (`iha-frontend`, Next.js 15 + Tailwind) on 2026-09-26.

---

You are building a sub-domain website for **InnovateHealth Africa (IHA)**,
main site: https://innovatehealth.africa. The sub-domain must look and feel
like part of the main site. Apply the brand rules below exactly. Do not invent
new brand colours, fonts, or button styles.

## 1. Colour palette

Use these tokens. Hex values are authoritative; HSL values are how the main
site declares them as CSS variables.

| Role | Token name | Hex | HSL | Usage |
|---|---|---|---|---|
| Primary | `primary` | `#0D2615` | `138 47% 10%` | Hero and footer backgrounds, headings, dark sections |
| Primary alias | `primary-dark-green` | `#0D241D` | — | Same role as primary; treat as interchangeable |
| Primary bright | `primary-green` | `#008629` | — | Brighter green for icons, highlights |
| CTA / interactive | `teal` | `#006666` | — | ALL buttons, links, "Read More" CTAs, badges, outlines |
| CTA hover | `teal-hover` | `#005252` | — | Hover state of teal elements |
| Accent | `accent` / `primary-bright-orange` | `#FFC332` | `42 100% 60%` | Hero titles on dark green, footer headings, emphasis |
| Secondary | `secondary-sky-blue` | `#E1FFF4` | `170 100% 94%` | Light tinted section backgrounds, secondary buttons |
| Secondary strong | `secondary-cyan` | `#91FFE6` | — | Highlights on light backgrounds |
| Background | `background` | `#FFFFFF` | `0 0% 100%` | Page background |
| Foreground | `foreground` | `#020817` | `222.2 84% 4.9%` | Default body text |
| Body copy | — | Tailwind `gray-700` (`#374151`) | — | Paragraph text on white |
| Border | `border` | `#E2E8F0` | `214.3 31.8% 91.4%` | Card borders, dividers |
| Muted text | `muted-foreground` | `#64748B` | `215.4 16.3% 46.9%` | Captions, metadata |

Extended tints, if you need them:

- Primary scale: `50 → 138 47% 95%`, `100 → 85%`, `200 → 75%`, `300 → 65%`, `400 → 55%`, `500 → 10%` (base), `600 → 8%`, `700 → 6%`, `800 → 4%`, `900 → 3%`, `950 → 2%`.
- Accent scale: `50 → 42 100% 95%`, `100 → 85%`, `200 → 75%`, `300 → 65%`, `400 → 55%`, `500 → 60%` (base), `600 → 50%`, `700 → 40%`, `800 → 30%`, `900 → 20%`, `950 → 10%`.

Rules:

- Dark sections are always primary green `#0D2615` with white body text and gold `#FFC332` headings.
- Buttons and links on light backgrounds are always teal `#006666`. Never use the primary green or gold for buttons on white.
- Gold `#FFC332` is for text and small highlights only. Never use it as a large background fill.
- Do not use pure black anywhere. Use `#0D2615` or `#020817` instead.

## 2. Typography

- **Body and headings: Gilroy** (local font, not on Google Fonts). Weights available: Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800, Black 900, each with italic. The font files must be copied from the main site repo at `src/app/ui/fonts/Gilroy-*.ttf`. Load them with `next/font/local` under the CSS variable `--font-gilroy` and set `html { font-family: var(--font-gilroy); }`.
- **Fallback / secondary: Poppins** from Google Fonts (variable `--font-sans`). Use only if Gilroy files are unavailable.
- **Display alternative: Space Grotesk** from Google Fonts (variable `--font-space-grotesk`), weights 400 to 700. Use sparingly for numeric callouts or labels.

Scale used on the main site:

| Element | Classes |
|---|---|
| Hero title | `text-4xl lg:text-5xl font-bold`, colour `#FFC332` on dark green |
| Hero description | `text-lg lg:text-2xl font-medium text-white` |
| Section title | `text-3xl lg:text-5xl font-bold text-primary`, usually centred |
| Card title | `text-[19px]` to `text-2xl font-bold text-primary leading-snug` |
| Body | `text-[15px]` to `text-base text-gray-700`, line-height 1.6 |
| Footer link | `text-base font-light text-white`, hover gold + underline |

## 3. Layout and spacing

- Content container: `max-w-screen-xl mx-auto px-6 lg:px-0` (1280px max).
- Section vertical padding: `py-16` on standard sections, `py-14 lg:py-20` on rich content pages.
- Hero: full-width dark green (`bg-primary`), `h-[70vh] sm:h-[600px]`, centred text, optional background image with `bg-primary/50` overlay.
- Footer: `bg-primary py-20`, three-column grid on desktop, gold headings, white links.
- Border radius token: `--radius: 0.75rem`. Cards use `rounded-lg` or `rounded-xl`, buttons `rounded-md`, modals `rounded-2xl`.
- Card grid: `grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

## 4. Components

### 4.1 Buttons: which one to use where

The site has three button looks. Pick by placement, not by preference.

| Placement | Button | Look |
|---|---|---|
| Header nav action (e.g. "AHIF 2026") | `Button` `default` variant, size `lg` | Primary dark green `#0D2615` fill, white text |
| Hero on dark green (e.g. "Work with Us") | `Button` `secondary` variant, size `lg` | Mint fill, dark green text |
| Cards, sections, inline CTAs on white | Teal outline CTA | Teal border and text, fills teal on hover |
| Selected / expanded state of a card CTA | Teal filled CTA | Teal fill, white text |
| Status badge (e.g. "Coming Soon") | Teal pill | Teal fill, white uppercase text |

**Default button (header "AHIF 2026" is the reference implementation):**

The shadcn `Button` component, `default` variant, rendered as a link with `asChild`. Its fill is the **primary dark green** brand colour (`#0D2615`, the `primary` token, `hsl(138 47% 10%)`). Never substitute the teal, the bright green `#008629`, or the gold for this button.

```tsx
<Button size="lg" asChild className="px-6 text-base font-normal">
  <Link href="/some-page">AHIF 2026</Link>
</Button>
```

| Property | Value |
|---|---|
| Background | Primary dark green `#0D2615` (`bg-primary`, token `--primary: 138 47% 10%`) |
| Text | `#FFFFFF` (`text-primary-foreground`) |
| Hover | background at 90% opacity (`hover:bg-primary/90`) |
| Focus | 2px ring `#020817`, 2px white offset |
| Height | 44px (`h-11`) |
| Padding | 24px sides (`px-6`, overriding the size `lg` default of 32px) |
| Font | Gilroy 16px, weight 400 (`text-base font-normal`, overriding the base 14px / 500) |
| Radius | 10px (`rounded-md`) |
| Disabled | opacity 0.5, pointer events off |

Resolved class list:

```
inline-flex items-center justify-center whitespace-nowrap rounded-md
bg-primary text-primary-foreground hover:bg-primary/90
h-11 px-6 text-base font-normal transition-colors
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

On desktop it is hidden below 768px (`hidden md:inline-flex`). In the mobile slide-in menu the same button is full width (`w-full mb-8`) at the base 14px / weight 500, placed above the nav links, and closes the menu on click.

**All `Button` variants** (shadcn `buttonVariants` in `src/components/ui/button.tsx`). Base classes: `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`.

| Variant | Background | Text | Hover |
|---|---|---|---|
| `default` | Primary dark green `#0D2615` | `#FFFFFF` | background 90% opacity |
| `secondary` | `#E1FFF4` | Primary dark green `#0D2615` | background 80% opacity |
| `outline` | `#FFFFFF`, 1px `#E2E8F0` border | `#020817` | `#FFC332` background, `#0D2615` text |
| `ghost` | transparent | inherit | `#FFC332` background, `#0D2615` text |
| `destructive` | `#EF4444` | `#F8FAFC` | background 90% opacity |
| `link` | none | `#0D2615` | underline, 4px offset |

Sizes: `sm` 36px tall / 12px sides, `default` 40px / 16px sides, `lg` 44px / 32px sides, `icon` 40px square. The header overrides `lg` padding to 24px with `px-6`.

Copy `button.tsx` from the main repo as-is so the variants match, then add a `teal` variant using the classes in the next block.

### 4.2 Teal CTA and card components

**Primary CTA (outline teal, the most common button on the site):**

```
inline-flex items-center justify-center gap-2 border border-[#006666] text-[#006666]
bg-transparent px-5 py-2 rounded-md text-sm font-semibold transition-all duration-250
hover:bg-[#006666] hover:text-white
```

Include a trailing `ArrowRight` icon (16px, from lucide-react) that nudges right on hover (`group-hover:translate-x-1`).

**Filled CTA (used when the button is in an active/selected state):**

```
bg-[#006666] text-white border border-[#006666] hover:bg-[#005252] rounded-md px-5 py-2 text-sm font-semibold
```

**Hero button on dark green ("Work with Us"):** shadcn `Button` with `variant="secondary" size="lg"`, which renders as pale mint `#E1FFF4` background with dark green text.

**Badge / pill:** `bg-[#006666] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`.

**Card:**

```
bg-white rounded-lg overflow-hidden shadow-md transition-all duration-250
hover:-translate-y-1.5 hover:shadow-2xl
```

Image on top at `h-[240px]` with `object-cover`, then `p-6` content. Card titles turn teal on hover.

**Accordion / expand animation:** 200 to 350ms, easing `cubic-bezier(0.4, 0, 0.2, 1)`. The main site uses framer-motion `AnimatePresence` with `height: auto` or the Tailwind `accordion-down` keyframes.

## 5. Stack and conventions

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, shadcn/ui components (Button, Card, Accordion, Badge, Input, Textarea, Separator, Navigation Menu on Radix), `lucide-react` icons, `framer-motion` for animation, `clsx` + `tailwind-merge` via a `cn()` helper.
- Declare colours as HSL CSS variables in `globals.css` under `:root`, and reference them in `tailwind.config.ts` as `hsl(var(--token))`, matching the main site.
- Add the teal as a named token (for example `teal: '#006666'` with `hover: '#005252'`) so it is not hardcoded like it is on the main site.
- Use `next/image` for all images. Keep image aspect ratios consistent within a grid.
- Every page exports `metadata` with a title in the form `"Page Name | InnovateHealth Africa"` and a description.
- Contact email: info@innovatehealthafrica.org.

## 6. Tailwind config starter

```ts
// tailwind.config.ts (extend.colors)
colors: {
  border: 'hsl(var(--border))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: {
    DEFAULT: 'hsl(var(--primary))',        // #0D2615
    foreground: 'hsl(var(--primary-foreground))',
    'dark-green': '#0D241D',
    green: '#008629',
    'bright-orange': '#FFC332',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',      // #E1FFF4
    foreground: 'hsl(var(--secondary-foreground))',
    cyan: '#91FFE6',
    'sky-blue': '#E1FFF4',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',         // #FFC332
    foreground: 'hsl(var(--accent-foreground))',
  },
  teal: { DEFAULT: '#006666', hover: '#005252' },
},
fontFamily: {
  sans: ['var(--font-gilroy)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
  spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
},
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
},
```

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 138 47% 10%;
  --primary-foreground: 0 0% 100%;
  --secondary: 170 100% 94%;
  --secondary-foreground: 138 47% 10%;
  --accent: 42 100% 60%;
  --accent-foreground: 138 47% 10%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.75rem;
}
html { font-family: var(--font-gilroy); }
```

## 7. Quick checklist before shipping a page

- [ ] Hero is dark green with a gold title and white description.
- [ ] Header action button is the `default` variant (dark green fill, white text, 44px, 24px sides, 16px regular).
- [ ] All buttons and links on white are teal `#006666`.
- [ ] Body text is Gilroy, loaded locally.
- [ ] Content is inside a 1280px container with 24px side gutters on mobile.
- [ ] Cards use the shared card style and hover lift.
- [ ] Footer is dark green with gold headings.
- [ ] Page exports `metadata` with the `| InnovateHealth Africa` suffix.
