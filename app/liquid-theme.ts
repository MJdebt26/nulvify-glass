/**
 * Nulvify — "Liquid Glass" design system (the blend).
 *
 * Best of both explorations + the actual state-of-the-art:
 *  • Rich, drifting color environment so the glass has real light to refract
 *    (the #1 thing that separates premium glass from a smudgy gray panel).
 *  • Low-tint, lightly-blurred, heavily-saturated surfaces — "lensing over
 *    blurring", the Apple Liquid Glass signature — not a thick 20px frost.
 *  • A single implied light source: a bright specular rim on the top-left edge
 *    (::before, gradient-masked) fading to a faint oxblood chromatic edge.
 *  • A soft highlight that follows the cursor (::after, driven by --mx/--my)
 *    and defaults to top-left so static cards still read as lit.
 *  • Real optical refraction (SVG feDisplacementMap) reserved for the hero
 *    showcase + nav + big CTA/auth surfaces — Chromium only, gated by the
 *    `.lg-refract-on` class LiquidFX adds; the many small cards keep the cheap,
 *    gorgeous blur fallback (perf: never refract dozens of panels).
 *  • Deep, diffused float shadows; springy hover; tactile press.
 *  • Honors prefers-reduced-transparency / -contrast / -motion → solid panels.
 *
 * Everything is scoped under `.lg-root`.
 */
export const LIQUID_CSS = `
.lg-root {
  --lg-paper:      #EDE4D2;
  --lg-paper-2:    #E7DCC6;
  --lg-card:       #F6F0E2;
  --lg-ink:        #1C1A16;
  --lg-ink-soft:   #3F3A30;
  --lg-muted:      #6F6657;
  --lg-muted-2:    #8B8270;
  --lg-line:       #D7CDB6;
  --lg-accent:     #9A3B2C;
  --lg-accent-deep:#7C2C20;
  --lg-sage:       #4F6450;
  --lg-gold:       #C9A14A;
  --lg-on-accent:  #F4EEDF;

  /* glass material knobs */
  --lg-tint:       linear-gradient(150deg, rgba(255,255,255,0.30), rgba(255,252,247,0.10) 60%, rgba(255,250,244,0.06));
  --lg-tint-strong:linear-gradient(150deg, rgba(255,255,255,0.42), rgba(255,252,247,0.16));
  --lg-blur:       12px;
  --lg-sat:        1.85;
  --lg-radius:     22px;
  --lg-spring:     cubic-bezier(.34, 1.4, .5, 1);

  position: relative;
  min-height: 100vh;
  background: var(--lg-paper);
  color: var(--lg-ink-soft);
  font-family: var(--font-geist-sans, system-ui), -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

/* ── the environment: drifting color mesh the glass bends ─────────────────── */
.lg-ambient { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;
  background:
    radial-gradient(60% 50% at 50% 8%, rgba(255,252,246,0.6), transparent 70%),
    linear-gradient(180deg, #F1E9DA 0%, #EDE4D2 42%, #E7DBC6 100%);
}
.lg-orb { position: absolute; border-radius: 50%; filter: blur(64px); }
.lg-orb--1 { width: 660px; height: 660px; top: -160px; left: -120px;
  background: radial-gradient(circle, rgba(154,59,44,0.42), rgba(154,59,44,0.06) 62%, transparent 72%);
  animation: lg-drift-1 30s ease-in-out infinite; }
.lg-orb--2 { width: 600px; height: 600px; top: 16%; right: -180px;
  background: radial-gradient(circle, rgba(79,100,80,0.34), rgba(79,100,80,0.05) 62%, transparent 72%);
  animation: lg-drift-2 36s ease-in-out infinite; }
.lg-orb--3 { width: 560px; height: 560px; bottom: -180px; left: 24%;
  background: radial-gradient(circle, rgba(201,161,74,0.32), rgba(201,161,74,0.05) 62%, transparent 72%);
  animation: lg-drift-1 33s ease-in-out infinite reverse; }
.lg-orb--4 { width: 460px; height: 460px; top: 44%; left: 42%;
  background: radial-gradient(circle, rgba(214,120,90,0.28), transparent 66%);
  animation: lg-drift-2 40s ease-in-out infinite; }
@keyframes lg-drift-1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(52px,38px) scale(1.06); } }
@keyframes lg-drift-2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-44px,32px) scale(1.05); } }

/* fine grain over everything — kills banding, adds tactile frost */
.lg-grain { position: fixed; inset: 0; z-index: 1; pointer-events: none; opacity: 0.5; mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

.lg-page { position: relative; z-index: 2; }
.lg-container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
.lg-section { padding: clamp(64px, 11vh, 128px) 0; }
.lg-section--tight { padding: clamp(40px, 7vh, 80px) 0; }

/* ══ TYPOGRAPHY ═══════════════════════════════════════════════════════════ */
.lg-eyebrow { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--lg-accent); font-weight: 500; display: inline-block; }
.lg-eyebrow--muted { color: var(--lg-muted); }
.lg-display { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(40px, 6.6vw, 84px); font-weight: 600; line-height: 1.01; letter-spacing: -0.026em; color: var(--lg-ink); margin: 0; }
.lg-h1 { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(32px, 4.6vw, 56px); font-weight: 600; line-height: 1.06; letter-spacing: -0.02em; color: var(--lg-ink); margin: 0; }
.lg-h2 { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(26px, 3.4vw, 40px); font-weight: 600; line-height: 1.12; letter-spacing: -0.018em; color: var(--lg-ink); margin: 0; }
.lg-h3 { font-family: var(--font-fraunces, Georgia), serif; font-size: 21px; font-weight: 600; line-height: 1.2; letter-spacing: -0.01em; color: var(--lg-ink); margin: 0; }
.lg-lede { font-size: clamp(17px, 1.5vw, 20px); line-height: 1.6; color: var(--lg-ink-soft); margin: 0; }
.lg-body { font-size: 15px; line-height: 1.68; color: var(--lg-ink-soft); margin: 0; }
.lg-body--sm { font-size: 13.5px; line-height: 1.6; }
.lg-accent { color: var(--lg-accent); }
.lg-mono { font-family: var(--font-geist-mono, ui-monospace), monospace; }

/* ══ THE GLASS SURFACE ════════════════════════════════════════════════════
   Low tint + light blur + high saturation = lensing, not frosting. The rim
   (::before) is the single implied light source; the highlight (::after)
   follows the cursor. Real refraction is added only to hero surfaces below. */
.lg-glass {
  position: relative;
  background: var(--lg-tint);
  backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-sat)) brightness(1.06);
  -webkit-backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-sat)) brightness(1.06);
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: var(--lg-radius);
  box-shadow:
    inset 0 1px 0.5px rgba(255,255,255,0.65),
    inset 0 -1px 1px rgba(255,255,255,0.14),
    0 1px 1px rgba(124,44,32,0.04),
    0 22px 44px -24px rgba(38,26,17,0.30),
    0 6px 16px -10px rgba(38,26,17,0.16);
  isolation: isolate;
}
/* specular rim — bright top-left → transparent → faint oxblood bottom-right */
.lg-glass::before {
  content: ''; position: absolute; inset: 0; border-radius: inherit; z-index: 0; pointer-events: none;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.25) 24%, rgba(255,255,255,0) 52%, rgba(154,59,44,0.20) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
}
/* cursor-follow highlight (defaults to top-left so it reads as lit at rest) */
.lg-glass::after {
  content: ''; position: absolute; inset: 0; border-radius: inherit; z-index: 0; pointer-events: none;
  background: radial-gradient(circle at var(--mx, 26%) var(--my, 0%), rgba(255,255,255,0.35), rgba(255,255,255,0.06) 30%, transparent 55%);
  opacity: 0.9; transition: opacity .4s ease;
}
.lg-glass > * { position: relative; z-index: 1; }

/* springy hover "breathe" + brighter rim + lifted shadow */
.lg-glass--hover { transition: transform .5s var(--lg-spring), box-shadow .5s ease, backdrop-filter .5s ease, border-color .5s ease; }
.lg-glass--hover:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(255,255,255,0.5);
  box-shadow:
    inset 0 1px 0.5px rgba(255,255,255,0.85),
    inset 0 -1px 1px rgba(255,255,255,0.2),
    0 2px 2px rgba(124,44,32,0.05),
    0 40px 70px -26px rgba(38,26,17,0.38),
    0 14px 30px -12px rgba(154,59,44,0.16);
}
.lg-glass--hover:hover::after { opacity: 1; }
.lg-glass--hover:active { transform: translateY(-1px) scale(1.004); transition-duration: .08s; }

.lg-card { padding: 26px; }

/* Chromium-only real refraction, reserved for the hero moments (perf). */
.lg-refract-on .lg-glass--refract {
  backdrop-filter: url(#lg-refraction) saturate(var(--lg-sat)) brightness(1.06);
  -webkit-backdrop-filter: url(#lg-refraction) saturate(var(--lg-sat)) brightness(1.06);
}

/* ══ BUTTONS ══════════════════════════════════════════════════════════════ */
.lg-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 50px; padding: 0 26px; border-radius: 999px; border: none; cursor: pointer;
  font-family: inherit; font-size: 15px; font-weight: 600; text-decoration: none;
  transition: transform .3s var(--lg-spring), box-shadow .3s ease, background .3s ease, border-color .3s ease;
  white-space: nowrap; position: relative; isolation: isolate;
}
.lg-btn--primary { background: linear-gradient(180deg, #A6402F, var(--lg-accent-deep)); color: var(--lg-on-accent);
  box-shadow: 0 10px 26px -12px rgba(154,59,44,0.6), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -2px 6px -2px rgba(0,0,0,0.2); }
.lg-btn--primary:hover { transform: translateY(-2px); box-shadow: 0 18px 36px -12px rgba(154,59,44,0.66), inset 0 1px 0 rgba(255,255,255,0.34); }
.lg-btn--primary:active { transform: translateY(0); transition-duration: .06s; }
.lg-btn--glass {
  color: var(--lg-ink);
  background: var(--lg-tint-strong);
  backdrop-filter: blur(10px) saturate(1.6); -webkit-backdrop-filter: blur(10px) saturate(1.6);
  border: 1px solid rgba(255,255,255,0.55);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px -16px rgba(38,26,17,0.3);
}
.lg-btn--glass:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.8); box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 16px 30px -14px rgba(38,26,17,0.34); }
.lg-btn--glass:active { transform: translateY(0); transition-duration: .06s; }
.lg-btn--sm { height: 40px; padding: 0 18px; font-size: 13.5px; }
.lg-btn--lg { height: 56px; padding: 0 32px; font-size: 16px; }

/* ══ NAV ══════════════════════════════════════════════════════════════════ */
.lg-nav { position: sticky; top: 0; z-index: 50; padding: 14px 20px; }
.lg-nav-inner {
  max-width: 1160px; margin: 0 auto; display: flex; align-items: center; gap: 24px;
  padding: 11px 12px 11px 22px; border-radius: 18px;
  position: relative; background: var(--lg-tint-strong);
  backdrop-filter: blur(14px) saturate(1.8); -webkit-backdrop-filter: blur(14px) saturate(1.8);
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: inset 0 1px 0.5px rgba(255,255,255,0.85), 0 14px 34px -22px rgba(38,26,17,0.34), 0 4px 10px -8px rgba(38,26,17,0.14);
}
.lg-refract-on .lg-nav-inner { backdrop-filter: url(#lg-refraction) saturate(1.8); -webkit-backdrop-filter: url(#lg-refraction) saturate(1.8); }
.lg-wordmark { font-family: var(--font-fraunces, Georgia), serif; font-weight: 600; font-size: 19px; letter-spacing: -0.02em; color: var(--lg-ink); text-decoration: none; }
.lg-wordmark-dot { color: var(--lg-accent); }
.lg-nav-links { display: flex; gap: 6px; margin-right: auto; }
.lg-nav-link { font-size: 14px; color: var(--lg-muted); text-decoration: none; padding: 7px 13px; border-radius: 10px; transition: color .2s ease, background .2s ease; }
.lg-nav-link:hover { color: var(--lg-ink); background: rgba(255,255,255,0.4); }
.lg-nav-link--active { color: var(--lg-ink); font-weight: 600; background: rgba(255,255,255,0.5); }
.lg-nav-actions { display: flex; align-items: center; gap: 10px; }
.lg-nav-toggle { display: none; width: 42px; height: 42px; border-radius: 12px; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.35); cursor: pointer; color: var(--lg-ink); }
.lg-nav-mobile { display: none; }

@media (max-width: 860px) {
  .lg-nav-links, .lg-nav-actions .lg-nav-desktop-only { display: none; }
  .lg-nav-toggle { display: flex; }
  .lg-nav-mobile {
    display: none; max-width: 1160px; margin: 10px auto 0; padding: 16px; border-radius: 18px; flex-direction: column; gap: 4px;
    background: var(--lg-tint-strong);
    backdrop-filter: blur(14px) saturate(1.8); -webkit-backdrop-filter: blur(14px) saturate(1.8);
    border: 1px solid rgba(255,255,255,0.4);
    box-shadow: inset 0 1px 0.5px rgba(255,255,255,0.85), 0 18px 40px -24px rgba(38,26,17,0.34);
  }
  .lg-nav-mobile--open { display: flex; }
  .lg-nav-mobile .lg-nav-link { font-size: 15px; padding: 12px 14px; }
  .lg-nav-mobile .lg-btn { margin-top: 8px; width: 100%; }
}

/* ══ HERO ═════════════════════════════════════════════════════════════════ */
.lg-hero { padding: clamp(52px, 9vh, 104px) 0 clamp(60px, 10vh, 116px); }
.lg-hero-grid { display: grid; grid-template-columns: 1fr; gap: clamp(40px, 6vw, 72px); align-items: center; }
@media (min-width: 940px) { .lg-hero-grid { grid-template-columns: 1.05fr 0.95fr; } }
.lg-hero-copy > * + * { margin-top: 22px; }
.lg-hero-btns { display: flex; flex-wrap: wrap; gap: 12px; }
.lg-hero-trust { display: flex; align-items: center; gap: 10px; margin-top: 26px; }
.lg-avatars { display: flex; }
.lg-avatars span { width: 30px; height: 30px; border-radius: 50%; border: 2px solid var(--lg-paper); margin-left: -8px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: var(--lg-on-accent); }
.lg-avatars span:first-child { margin-left: 0; }

/* the hero showcase card — the star: strongest refraction + 3D tilt */
.lg-hero-card { border-radius: 28px; padding: 30px; transform-style: preserve-3d; will-change: transform; }
.lg-refract-on .lg-hero-card { backdrop-filter: url(#lg-lens) saturate(1.9) brightness(1.07); -webkit-backdrop-filter: url(#lg-lens) saturate(1.9) brightness(1.07); }
.lg-hero-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.lg-hero-date { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(36px, 5vw, 54px); font-weight: 600; color: var(--lg-ink); letter-spacing: -0.02em; line-height: 1; }
.lg-hero-sub { font-size: 13px; color: var(--lg-muted); margin-top: 8px; }
.lg-prog { margin-top: 22px; }
.lg-prog-track { height: 8px; border-radius: 999px; background: rgba(120,105,80,0.22); overflow: hidden; box-shadow: inset 0 1px 2px rgba(38,26,17,0.14); }
.lg-prog-fill { height: 100%; width: 68%; border-radius: 999px; background: linear-gradient(90deg, var(--lg-accent), var(--lg-accent-deep)); transform-origin: left; animation: lg-fill 1.6s cubic-bezier(.2,.7,.2,1) .3s both; box-shadow: 0 0 12px rgba(154,59,44,0.4); }
@keyframes lg-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.lg-prog-ends { display: flex; justify-content: space-between; margin-top: 10px; font-size: 11px; color: var(--lg-muted); }
.lg-hero-rows { margin-top: 24px; display: flex; flex-direction: column; gap: 2px; }
.lg-hero-row { display: flex; justify-content: space-between; align-items: center; padding: 11px 0; border-top: 1px solid rgba(120,105,80,0.16); font-size: 13.5px; }
.lg-hero-row span:first-child { color: var(--lg-muted); }
.lg-hero-row span:last-child { color: var(--lg-ink); font-weight: 600; font-variant-numeric: tabular-nums; }

/* ══ SECTION HEADERS ══════════════════════════════════════════════════════ */
.lg-shead { max-width: 640px; margin: 0 auto clamp(40px, 6vh, 64px); text-align: center; }
.lg-shead > * + * { margin-top: 16px; }
.lg-shead--left { margin-left: 0; text-align: left; }

/* ══ GRIDS & FEATURE CARDS ════════════════════════════════════════════════ */
.lg-grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 680px) { .lg-grid--2 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 860px) { .lg-grid--3 { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 680px) { .lg-grid--4 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 940px) { .lg-grid--4 { grid-template-columns: repeat(4, 1fr); } }

.lg-feature-icon { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; color: var(--lg-accent);
  background: linear-gradient(155deg, rgba(154,59,44,0.16), rgba(154,59,44,0.04)); border: 1px solid rgba(154,59,44,0.16); box-shadow: inset 0 1px 0 rgba(255,255,255,0.6); }
.lg-feature h3 { margin-bottom: 10px; }

/* ══ STATS STRIP ══════════════════════════════════════════════════════════ */
.lg-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
@media (min-width: 780px) { .lg-stats { grid-template-columns: repeat(4, 1fr); } }
.lg-stat { text-align: center; padding: 26px 18px; }
.lg-stat-num { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(30px, 4vw, 44px); font-weight: 600; color: var(--lg-ink); letter-spacing: -0.02em; line-height: 1; }
.lg-stat-label { font-size: 13px; color: var(--lg-muted); margin-top: 10px; }

/* ══ STEPS ════════════════════════════════════════════════════════════════ */
.lg-steps { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 860px) { .lg-steps { grid-template-columns: repeat(3, 1fr); } }
.lg-step-num { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 13px; font-weight: 500; color: var(--lg-accent); width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
  background: linear-gradient(155deg, rgba(154,59,44,0.14), rgba(154,59,44,0.04)); border: 1px solid rgba(154,59,44,0.18); }

/* ══ TESTIMONIALS ═════════════════════════════════════════════════════════ */
.lg-quote { font-family: var(--font-fraunces, Georgia), serif; font-size: 18px; line-height: 1.5; color: var(--lg-ink); font-weight: 500; }
.lg-quote-by { display: flex; align-items: center; gap: 12px; margin-top: 20px; }
.lg-quote-av { width: 36px; height: 36px; border-radius: 50%; background: var(--lg-accent); color: var(--lg-on-accent); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; }
.lg-quote-name { font-size: 13.5px; font-weight: 600; color: var(--lg-ink); }
.lg-quote-role { font-size: 12px; color: var(--lg-muted); }

/* ══ PRICING ══════════════════════════════════════════════════════════════ */
.lg-price-grid { display: grid; gap: 22px; grid-template-columns: 1fr; max-width: 780px; margin: 0 auto; }
@media (min-width: 760px) { .lg-price-grid { grid-template-columns: repeat(2, 1fr); align-items: start; } }
.lg-price-card { padding: 32px; }
.lg-price-card--feat { border-color: rgba(154,59,44,0.35); }
.lg-price-badge { display: inline-block; font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--lg-on-accent); background: var(--lg-accent); padding: 5px 11px; border-radius: 999px; margin-bottom: 16px; }
.lg-price-name { font-family: var(--font-fraunces, Georgia), serif; font-size: 22px; font-weight: 600; color: var(--lg-ink); }
.lg-price-num { font-family: var(--font-fraunces, Georgia), serif; font-size: 48px; font-weight: 600; color: var(--lg-ink); letter-spacing: -0.02em; margin: 14px 0 4px; }
.lg-price-num small { font-family: var(--font-geist-sans), sans-serif; font-size: 15px; font-weight: 400; color: var(--lg-muted); }
.lg-price-list { list-style: none; padding: 0; margin: 24px 0; display: flex; flex-direction: column; gap: 13px; }
.lg-price-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--lg-ink-soft); line-height: 1.5; }
.lg-check { color: var(--lg-accent); flex: none; margin-top: 1px; }

/* ══ CTA BANNER ═══════════════════════════════════════════════════════════ */
.lg-cta-band { border-radius: 30px; padding: clamp(40px, 7vw, 76px); text-align: center; }
.lg-cta-band > * + * { margin-top: 20px; }
.lg-cta-band .lg-hero-btns { justify-content: center; }

/* ══ AUTH ═════════════════════════════════════════════════════════════════ */
.lg-auth-wrap { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 90px); padding: 48px 24px; }
.lg-auth-card { width: 100%; max-width: 420px; border-radius: 26px; padding: 36px; }
.lg-auth-card > * + * { margin-top: 18px; }
.lg-field { display: flex; flex-direction: column; gap: 7px; }
.lg-label { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--lg-muted); }
.lg-input { height: 48px; padding: 0 15px; border-radius: 13px; font-size: 15px; color: var(--lg-ink); font-family: inherit;
  background: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.6); outline: none;
  box-shadow: inset 0 1px 2px rgba(38,26,17,0.07); transition: border-color .2s ease, box-shadow .2s ease; }
.lg-input::placeholder { color: var(--lg-muted-2); }
.lg-input:focus { border-color: rgba(154,59,44,0.5); box-shadow: inset 0 1px 2px rgba(38,26,17,0.06), 0 0 0 3px rgba(154,59,44,0.12); }
.lg-auth-alt { text-align: center; font-size: 13.5px; color: var(--lg-muted); }
.lg-auth-alt a { color: var(--lg-accent); text-decoration: none; font-weight: 600; }

/* ══ DASHBOARD ════════════════════════════════════════════════════════════ */
.lg-dash-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 26px; }
.lg-dash-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 980px) { .lg-dash-grid { grid-template-columns: 1.6fr 1fr; align-items: start; } }
.lg-dash-col { display: flex; flex-direction: column; gap: 16px; }
.lg-stat-value { font-family: var(--font-fraunces, Georgia), serif; font-size: 24px; font-weight: 600; color: var(--lg-ink); letter-spacing: -0.01em; }
.lg-debt { border-radius: var(--lg-radius); padding: 20px; border-left: 4px solid var(--lg-line); }
.lg-debt-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.lg-debt-name { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: var(--lg-ink); }
.lg-debt-rank { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; border: 1px solid transparent; flex: none; }
.lg-debt-apr { font-size: 12px; font-weight: 700; color: var(--lg-accent); }
.lg-debt-meta { display: flex; gap: 12px; font-size: 12.5px; color: var(--lg-ink-soft); margin-left: 32px; }
.lg-debt-free { font-size: 11px; color: var(--lg-accent); margin-left: 32px; margin-top: 6px; }
.lg-ring-wrap { position: relative; width: 92px; height: 92px; margin: 6px 0 10px; }
.lg-ring { width: 100%; height: 100%; transform: rotate(-90deg); }
.lg-ring-track { fill: none; stroke: rgba(120,105,80,0.2); stroke-width: 8; }
.lg-ring-fill { fill: none; stroke: var(--lg-accent); stroke-width: 8; stroke-linecap: round; stroke-dasharray: 264; stroke-dashoffset: 58; filter: drop-shadow(0 0 4px rgba(154,59,44,0.35)); }
.lg-ring-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-fraunces, Georgia), serif; font-size: 22px; font-weight: 700; color: var(--lg-ink); }
.lg-timeline { display: flex; flex-direction: column; gap: 9px; }
.lg-timeline-row { display: flex; justify-content: space-between; font-size: 12.5px; color: var(--lg-ink-soft); }
.lg-timeline-row span:first-child { color: var(--lg-muted); font-variant-numeric: tabular-nums; }
.lg-timeline-row--final span:last-child { color: var(--lg-accent); font-weight: 700; }

/* ══ FOOTER ═══════════════════════════════════════════════════════════════ */
.lg-footer { padding: 40px 20px 32px; }
.lg-footer-inner { max-width: 1160px; margin: 0 auto; border-radius: 24px; padding: 40px; }
.lg-footer-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 720px) { .lg-footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr; } }
.lg-footer-col h4 { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--lg-muted); margin: 0 0 14px; }
.lg-footer-col a { display: block; font-size: 14px; color: var(--lg-ink-soft); text-decoration: none; padding: 5px 0; transition: color .2s ease; }
.lg-footer-col a:hover { color: var(--lg-accent); }
.lg-footer-brand p { margin-top: 12px; max-width: 30ch; }
.lg-footer-bottom { max-width: 1160px; margin: 24px auto 0; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 12.5px; color: var(--lg-muted); }

.lg-note { text-align: center; font-size: 12px; color: var(--lg-muted); padding: 0 24px 24px; position: relative; z-index: 2; }

/* ══ ACCESSIBILITY FALLBACKS — glass → solid where the OS asks ═════════════ */
@media (prefers-reduced-motion: reduce) {
  .lg-orb, .lg-prog-fill { animation: none; }
  .lg-prog-fill { transform: scaleX(1); }
  .lg-glass--hover, .lg-btn { transition: none; }
  .lg-hero-card { transform: none !important; }
}
@media (prefers-reduced-transparency: reduce) {
  .lg-glass, .lg-glass--refract, .lg-nav-inner, .lg-nav-mobile, .lg-btn--glass, .lg-hero-card {
    backdrop-filter: none !important; -webkit-backdrop-filter: none !important; background: var(--lg-card) !important;
  }
  .lg-glass::after { display: none; }
}
@media (prefers-contrast: more) {
  .lg-glass, .lg-nav-inner { background: var(--lg-card); border-color: var(--lg-line); }
  .lg-glass::after { display: none; }
}
`
