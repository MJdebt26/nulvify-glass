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
- **One design system** in [`app/glass-theme.ts`](app/glass-theme.ts), scoped to
  `.gs-root`. Each glass surface is three layers — a frosted body
  (`backdrop-filter` blur + saturate), a slow diagonal shimmer, and a luminous
  hairline + inner glow — floating on a soft diffused shadow, with a subtle
  hover “breathe.” Soft ambient orbs sit behind the page so the glass has light
  to refract.
- **Fonts:** Fraunces (display), Geist Sans (UI), Geist Mono (labels).
- **Palette:** warm cream base, oxblood accent. Calm on purpose — no neon.

## Deploy

Works out of the box on any Next.js host (e.g. Vercel: import the repo, no env
vars needed). The forms are visual only — there’s no backend to configure.
