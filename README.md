# Nulvify — Liquid Glass concept site

A calm, **Apple Vision Pro–style “liquid glass”** marketing + product concept for
Nulvify, a debt-freedom app. It’s a self-contained Next.js site — a design
exploration, not a production build.

**This repo is independent.** It shares no code, data, database, auth, or
deployment with any other project. All numbers, names, and testimonials on the
pages are **illustrative examples**, not real accounts.

## Run it

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

To build for production:

```bash
npm run build
npm start
```

## What’s inside

| Route        | Page                                                        |
| ------------ | ----------------------------------------------------------- |
| `/`          | Home — hero, stats, features, how-it-works, testimonials    |
| `/features`  | Feature deep-dives                                          |
| `/pricing`   | Free vs. Pro + FAQ                                          |
| `/dashboard` | Product view — stat cards, strategy, debt rows, insights    |
| `/about`     | Story, values, team                                        |
| `/login`     | Sign-in (glass form, non-functional)                        |
| `/signup`    | Sign-up (glass form, non-functional)                        |

## How it’s built

- **Next.js (App Router) + React + TypeScript.** No Tailwind, no UI kit.
- **One design system** in [`app/liquid-theme.ts`](app/liquid-theme.ts), scoped to
  `.lg-root`. The glass is **tiered**:
  - **Hero showcase card** — real optical **edge-lensing refraction** (an SVG
    `feDisplacementMap` fed a displacement map generated to the card’s size) plus
    **3-pass chromatic aberration**, a **3D tilt**, and a specular highlight that
    both follow the cursor.
  - **Nav / CTA / featured / auth surfaces** — organic ripple refraction.
  - **The many small cards** — a cheap, high-quality blur + specular rim + grain
    (never refract dozens of panels — that’s the #1 performance trap).
- Every surface has a single **implied light source** (bright top-left rim → faint
  oxblood corner), a **cursor-follow highlight**, low tint + high saturation (so it
  *lenses* rather than muddy-frosts), and a **drifting oxblood/sage/gold color
  field behind it** so the glass has real light to bend.
- **Browser reality:** real SVG refraction in `backdrop-filter` runs in **Chromium
  only** (a known WebKit/Firefox gap). The engine is detected at runtime; Safari and
  Firefox get a rich blur fallback. The material also honors
  `prefers-reduced-transparency`, `prefers-contrast`, and `prefers-reduced-motion`,
  degrading to solid panels.
- **Fonts:** Fraunces (display), Geist Sans (UI), Geist Mono (labels).
- **Palette:** warm cream base, oxblood accent. Calm on purpose — no neon.

> Tip: the refraction, chromatic edges, and tilt are most alive when you move the
> pointer over the hero card — static screenshots undersell it.

## Deploy

Works out of the box on any Next.js host (e.g. Vercel: import the repo, no env
vars needed). The forms are visual only — there’s no backend to configure.
