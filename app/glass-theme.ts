/**
 * Shared "Liquid Glass" design system for the Nulvify glass site.
 *
 * Every rule is scoped under `.gs-root`. The glass language: each surface is
 * three stacked layers — a frosted body
 * (backdrop-blur + saturate), a slow diagonal shimmer (::before), and a
 * luminous hairline + inner glow ring (::after) — floating on a deep, diffused
 * shadow. Soft ambient orbs sit behind the page so the glass has something to
 * refract. Palette stays on-brand: warm cream base, oxblood accent, no neon.
 */
export const GLASS_CSS = `
.gs-root {
  --gs-paper:      #EDE4D2;
  --gs-paper-2:    #E7DCC6;
  --gs-card:       #F6F0E2;
  --gs-ink:        #1C1A16;
  --gs-ink-soft:   #3F3A30;
  --gs-muted:      #6F6657;
  --gs-muted-2:    #8B8270;
  --gs-line:       #D7CDB6;
  --gs-accent:     #9A3B2C;
  --gs-accent-deep:#7C2C20;
  --gs-sage:       #4F6450;
  --gs-on-accent:  #F4EEDF;

  --gs-glass-bg:   linear-gradient(155deg, rgba(255,253,247,0.60), rgba(255,250,240,0.22));
  --gs-glass-bd:   rgba(255,255,255,0.44);
  --gs-radius:     20px;

  position: relative;
  min-height: 100vh;
  background: var(--gs-paper);
  color: var(--gs-ink-soft);
  font-family: var(--font-geist-sans, system-ui), -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

/* ── ambient orbs — the light the glass bends ─────────────────────────────── */
.gs-ambient {
  position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;
}
.gs-orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.55; }
.gs-orb--1 { width: 620px; height: 620px; top: -180px; left: -120px;
  background: radial-gradient(circle, rgba(154,59,44,0.28), transparent 68%);
  animation: gs-drift-1 26s ease-in-out infinite; }
.gs-orb--2 { width: 560px; height: 560px; top: 22%; right: -160px;
  background: radial-gradient(circle, rgba(79,100,80,0.22), transparent 68%);
  animation: gs-drift-2 32s ease-in-out infinite; }
.gs-orb--3 { width: 520px; height: 520px; bottom: -160px; left: 28%;
  background: radial-gradient(circle, rgba(201,161,74,0.18), transparent 68%);
  animation: gs-drift-1 30s ease-in-out infinite reverse; }
@keyframes gs-drift-1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px,30px); } }
@keyframes gs-drift-2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-36px,26px); } }

.gs-page { position: relative; z-index: 1; }
.gs-container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }
.gs-section { padding: clamp(64px, 11vh, 128px) 0; }
.gs-section--tight { padding: clamp(40px, 7vh, 80px) 0; }

/* ══ TYPOGRAPHY ═══════════════════════════════════════════════════════════ */
.gs-eyebrow {
  font-family: var(--font-geist-mono, ui-monospace), monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--gs-accent); font-weight: 500; display: inline-block;
}
.gs-eyebrow--muted { color: var(--gs-muted); }
.gs-display {
  font-family: var(--font-fraunces, Georgia), serif;
  font-size: clamp(40px, 6.6vw, 82px); font-weight: 600; line-height: 1.02;
  letter-spacing: -0.025em; color: var(--gs-ink); margin: 0;
}
.gs-h1 { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(32px, 4.6vw, 56px); font-weight: 600; line-height: 1.06; letter-spacing: -0.02em; color: var(--gs-ink); margin: 0; }
.gs-h2 { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(26px, 3.4vw, 40px); font-weight: 600; line-height: 1.12; letter-spacing: -0.018em; color: var(--gs-ink); margin: 0; }
.gs-h3 { font-family: var(--font-fraunces, Georgia), serif; font-size: 21px; font-weight: 600; line-height: 1.2; letter-spacing: -0.01em; color: var(--gs-ink); margin: 0; }
.gs-lede { font-size: clamp(17px, 1.5vw, 20px); line-height: 1.6; color: var(--gs-ink-soft); margin: 0; }
.gs-body { font-size: 15px; line-height: 1.68; color: var(--gs-ink-soft); margin: 0; }
.gs-body--sm { font-size: 13.5px; line-height: 1.6; }
.gs-accent { color: var(--gs-accent); }
.gs-mono { font-family: var(--font-geist-mono, ui-monospace), monospace; }

/* ══ THE GLASS SURFACE ════════════════════════════════════════════════════ */
.gs-glass {
  position: relative;
  background: var(--gs-glass-bg);
  backdrop-filter: blur(22px) saturate(1.7) brightness(1.04);
  -webkit-backdrop-filter: blur(22px) saturate(1.7) brightness(1.04);
  border: 1px solid var(--gs-glass-bd);
  box-shadow:
    inset 0 1px 0 0 rgba(255,255,255,0.75),
    inset 0 -14px 22px -16px rgba(255,255,255,0.18),
    0 1px 1px rgba(124,44,32,0.05),
    0 28px 50px -28px rgba(38,26,17,0.30),
    0 10px 20px -14px rgba(38,26,17,0.16);
  isolation: isolate;
  overflow: hidden;
}
.gs-glass::before {
  content: ''; position: absolute; inset: -60% -60%; z-index: 0; pointer-events: none;
  background: linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.28) 48%, rgba(255,255,255,0.05) 53%, transparent 64%);
  mix-blend-mode: overlay;
  animation: gs-shimmer 12s ease-in-out infinite;
}
.gs-glass::after {
  content: ''; position: absolute; inset: 0; border-radius: inherit; z-index: 0; pointer-events: none;
  box-shadow: 0 0 0 1px rgba(154,59,44,0.045), inset 0 0 24px rgba(255,255,255,0.15);
}
.gs-glass > * { position: relative; z-index: 1; }
@keyframes gs-shimmer {
  0%,100% { transform: translate(-4%,-3%) rotate(0deg); }
  50%     { transform: translate(4%,3%) rotate(0.8deg); }
}
/* hover "breathe" — only where interactive */
.gs-glass--hover { transition: transform .45s cubic-bezier(.22,1,.36,1), box-shadow .45s ease, backdrop-filter .45s ease, border-color .45s ease; }
.gs-glass--hover:hover {
  transform: translateY(-4px) scale(1.008);
  backdrop-filter: blur(28px) saturate(1.85) brightness(1.06);
  -webkit-backdrop-filter: blur(28px) saturate(1.85) brightness(1.06);
  border-color: rgba(255,255,255,0.62);
  box-shadow:
    inset 0 1px 0 0 rgba(255,255,255,0.85),
    inset 0 -14px 24px -16px rgba(255,255,255,0.22),
    0 2px 2px rgba(124,44,32,0.06),
    0 38px 66px -28px rgba(38,26,17,0.36),
    0 14px 30px -12px rgba(154,59,44,0.15);
}

.gs-card { border-radius: var(--gs-radius); padding: 26px; }

/* ══ BUTTONS ══════════════════════════════════════════════════════════════ */
.gs-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  height: 50px; padding: 0 26px; border-radius: 999px; border: none; cursor: pointer;
  font-family: inherit; font-size: 15px; font-weight: 600; text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  white-space: nowrap;
}
.gs-btn--primary { background: var(--gs-accent); color: var(--gs-on-accent);
  box-shadow: 0 10px 26px -12px rgba(154,59,44,0.55), inset 0 1px 0 rgba(255,255,255,0.22); }
.gs-btn--primary:hover { background: var(--gs-accent-deep); transform: translateY(-2px);
  box-shadow: 0 16px 34px -12px rgba(154,59,44,0.6), inset 0 1px 0 rgba(255,255,255,0.28); }
.gs-btn--glass {
  color: var(--gs-ink);
  background: linear-gradient(155deg, rgba(255,253,247,0.6), rgba(255,250,240,0.28));
  backdrop-filter: blur(16px) saturate(1.5); -webkit-backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px -16px rgba(38,26,17,0.3);
}
.gs-btn--glass:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.8);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 16px 30px -14px rgba(38,26,17,0.34); }
.gs-btn--sm { height: 40px; padding: 0 18px; font-size: 13.5px; }
.gs-btn--lg { height: 56px; padding: 0 32px; font-size: 16px; }

/* ══ NAV ══════════════════════════════════════════════════════════════════ */
.gs-nav { position: sticky; top: 0; z-index: 50; padding: 14px 20px; }
.gs-nav-inner {
  max-width: 1160px; margin: 0 auto; display: flex; align-items: center; gap: 24px;
  padding: 11px 12px 11px 22px; border-radius: 16px;
  background: var(--gs-glass-bg);
  backdrop-filter: blur(22px) saturate(1.7) brightness(1.03);
  -webkit-backdrop-filter: blur(22px) saturate(1.7) brightness(1.03);
  border: 1px solid var(--gs-glass-bd);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 14px 34px -24px rgba(38,26,17,0.32), 0 4px 10px -8px rgba(38,26,17,0.14);
}
.gs-wordmark { font-family: var(--font-fraunces, Georgia), serif; font-weight: 600; font-size: 19px; letter-spacing: -0.02em; color: var(--gs-ink); text-decoration: none; }
.gs-wordmark-dot { color: var(--gs-accent); }
.gs-nav-links { display: flex; gap: 6px; margin-right: auto; }
.gs-nav-link {
  font-size: 14px; color: var(--gs-muted); text-decoration: none; padding: 7px 13px; border-radius: 9px;
  transition: color .2s ease, background .2s ease;
}
.gs-nav-link:hover { color: var(--gs-ink); background: rgba(255,255,255,0.4); }
.gs-nav-link--active { color: var(--gs-ink); font-weight: 600; background: rgba(255,255,255,0.5); }
.gs-nav-actions { display: flex; align-items: center; gap: 10px; }
.gs-nav-toggle { display: none; width: 42px; height: 42px; border-radius: 11px; align-items: center; justify-content: center;
  border: 1px solid rgba(255,255,255,0.6); background: rgba(255,255,255,0.35); cursor: pointer; color: var(--gs-ink); }
.gs-nav-mobile { display: none; }

@media (max-width: 860px) {
  .gs-nav-links, .gs-nav-actions .gs-nav-desktop-only { display: none; }
  .gs-nav-toggle { display: flex; }
  .gs-nav-mobile {
    display: none; max-width: 1160px; margin: 10px auto 0; padding: 16px; border-radius: 16px; flex-direction: column; gap: 4px;
    background: var(--gs-glass-bg);
    backdrop-filter: blur(22px) saturate(1.7); -webkit-backdrop-filter: blur(22px) saturate(1.7);
    border: 1px solid var(--gs-glass-bd);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 18px 40px -24px rgba(38,26,17,0.34);
  }
  .gs-nav-mobile--open { display: flex; }
  .gs-nav-mobile .gs-nav-link { font-size: 15px; padding: 12px 14px; }
  .gs-nav-mobile .gs-btn { margin-top: 8px; width: 100%; }
}

/* ══ HERO ═════════════════════════════════════════════════════════════════ */
.gs-hero { padding: clamp(52px, 9vh, 104px) 0 clamp(60px, 10vh, 116px); }
.gs-hero-grid { display: grid; grid-template-columns: 1fr; gap: clamp(40px, 6vw, 72px); align-items: center; }
@media (min-width: 940px) { .gs-hero-grid { grid-template-columns: 1.05fr 0.95fr; } }
.gs-hero-copy > * + * { margin-top: 22px; }
.gs-hero-btns { display: flex; flex-wrap: wrap; gap: 12px; }
.gs-hero-trust { display: flex; align-items: center; gap: 10px; margin-top: 26px; }
.gs-avatars { display: flex; }
.gs-avatars span { width: 30px; height: 30px; border-radius: 50%; border: 2px solid var(--gs-paper); margin-left: -8px;
  display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: var(--gs-on-accent); }
.gs-avatars span:first-child { margin-left: 0; }

/* the glass showcase card in the hero */
.gs-hero-card { border-radius: 26px; padding: 28px; }
.gs-hero-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.gs-hero-date { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(36px, 5vw, 52px); font-weight: 600; color: var(--gs-ink); letter-spacing: -0.02em; line-height: 1; }
.gs-hero-sub { font-size: 13px; color: var(--gs-muted); margin-top: 8px; }
.gs-prog { margin-top: 22px; }
.gs-prog-track { height: 8px; border-radius: 999px; background: rgba(215,205,182,0.7); overflow: hidden; }
.gs-prog-fill { height: 100%; width: 68%; border-radius: 999px;
  background: linear-gradient(90deg, var(--gs-accent), var(--gs-accent-deep));
  transform-origin: left; animation: gs-fill 1.6s cubic-bezier(.2,.7,.2,1) .3s both; }
@keyframes gs-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.gs-prog-ends { display: flex; justify-content: space-between; margin-top: 10px; font-size: 11px; color: var(--gs-muted); }
.gs-hero-rows { margin-top: 24px; display: flex; flex-direction: column; gap: 2px; }
.gs-hero-row { display: flex; justify-content: space-between; align-items: center; padding: 11px 0; border-top: 1px solid rgba(215,205,182,0.55); font-size: 13.5px; }
.gs-hero-row span:first-child { color: var(--gs-muted); }
.gs-hero-row span:last-child { color: var(--gs-ink); font-weight: 600; font-variant-numeric: tabular-nums; }

/* ══ SECTION HEADERS ══════════════════════════════════════════════════════ */
.gs-shead { max-width: 640px; margin: 0 auto clamp(40px, 6vh, 64px); text-align: center; }
.gs-shead > * + * { margin-top: 16px; }
.gs-shead--left { margin-left: 0; text-align: left; }

/* ══ GRIDS & FEATURE CARDS ════════════════════════════════════════════════ */
.gs-grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 680px) { .gs-grid--2 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 860px) { .gs-grid--3 { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 680px) { .gs-grid--4 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 940px) { .gs-grid--4 { grid-template-columns: repeat(4, 1fr); } }

.gs-feature-icon {
  width: 46px; height: 46px; border-radius: 13px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px; color: var(--gs-accent);
  background: linear-gradient(155deg, rgba(154,59,44,0.14), rgba(154,59,44,0.05));
  border: 1px solid rgba(154,59,44,0.16);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
}
.gs-feature h3 { margin-bottom: 10px; }

/* ══ STATS STRIP ══════════════════════════════════════════════════════════ */
.gs-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
@media (min-width: 780px) { .gs-stats { grid-template-columns: repeat(4, 1fr); } }
.gs-stat { text-align: center; padding: 26px 18px; border-radius: var(--gs-radius); }
.gs-stat-num { font-family: var(--font-fraunces, Georgia), serif; font-size: clamp(30px, 4vw, 44px); font-weight: 600; color: var(--gs-ink); letter-spacing: -0.02em; line-height: 1; }
.gs-stat-label { font-size: 13px; color: var(--gs-muted); margin-top: 10px; }

/* ══ STEPS ════════════════════════════════════════════════════════════════ */
.gs-steps { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 860px) { .gs-steps { grid-template-columns: repeat(3, 1fr); } }
.gs-step-num {
  font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 13px; font-weight: 500;
  color: var(--gs-accent); width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
  background: linear-gradient(155deg, rgba(154,59,44,0.12), rgba(154,59,44,0.04));
  border: 1px solid rgba(154,59,44,0.18);
}

/* ══ TESTIMONIALS ═════════════════════════════════════════════════════════ */
.gs-quote { font-family: var(--font-fraunces, Georgia), serif; font-size: 18px; line-height: 1.5; color: var(--gs-ink); font-weight: 500; }
.gs-quote-by { display: flex; align-items: center; gap: 12px; margin-top: 20px; }
.gs-quote-av { width: 36px; height: 36px; border-radius: 50%; background: var(--gs-accent); color: var(--gs-on-accent);
  display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; }
.gs-quote-name { font-size: 13.5px; font-weight: 600; color: var(--gs-ink); }
.gs-quote-role { font-size: 12px; color: var(--gs-muted); }

/* ══ PRICING ══════════════════════════════════════════════════════════════ */
.gs-price-grid { display: grid; gap: 22px; grid-template-columns: 1fr; max-width: 780px; margin: 0 auto; }
@media (min-width: 760px) { .gs-price-grid { grid-template-columns: repeat(2, 1fr); align-items: start; } }
.gs-price-card { border-radius: 24px; padding: 32px; }
.gs-price-card--feat { border-color: rgba(154,59,44,0.35); }
.gs-price-badge { display: inline-block; font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 10.5px;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--gs-on-accent); background: var(--gs-accent);
  padding: 5px 11px; border-radius: 999px; margin-bottom: 16px; }
.gs-price-name { font-family: var(--font-fraunces, Georgia), serif; font-size: 22px; font-weight: 600; color: var(--gs-ink); }
.gs-price-num { font-family: var(--font-fraunces, Georgia), serif; font-size: 48px; font-weight: 600; color: var(--gs-ink); letter-spacing: -0.02em; margin: 14px 0 4px; }
.gs-price-num small { font-family: var(--font-geist-sans), sans-serif; font-size: 15px; font-weight: 400; color: var(--gs-muted); }
.gs-price-list { list-style: none; padding: 0; margin: 24px 0; display: flex; flex-direction: column; gap: 13px; }
.gs-price-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--gs-ink-soft); line-height: 1.5; }
.gs-check { color: var(--gs-accent); flex: none; margin-top: 1px; }

/* ══ CTA BANNER ═══════════════════════════════════════════════════════════ */
.gs-cta-band { border-radius: 28px; padding: clamp(40px, 7vw, 72px); text-align: center; }
.gs-cta-band > * + * { margin-top: 20px; }
.gs-cta-band .gs-hero-btns { justify-content: center; }

/* ══ AUTH ═════════════════════════════════════════════════════════════════ */
.gs-auth-wrap { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 90px); padding: 48px 24px; }
.gs-auth-card { width: 100%; max-width: 420px; border-radius: 24px; padding: 36px; }
.gs-auth-card > * + * { margin-top: 18px; }
.gs-field { display: flex; flex-direction: column; gap: 7px; }
.gs-label { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gs-muted); }
.gs-input {
  height: 48px; padding: 0 15px; border-radius: 12px; font-size: 15px; color: var(--gs-ink); font-family: inherit;
  background: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.6); outline: none;
  box-shadow: inset 0 1px 2px rgba(38,26,17,0.06); transition: border-color .2s ease, box-shadow .2s ease;
}
.gs-input::placeholder { color: var(--gs-muted-2); }
.gs-input:focus { border-color: rgba(154,59,44,0.5); box-shadow: inset 0 1px 2px rgba(38,26,17,0.06), 0 0 0 3px rgba(154,59,44,0.12); }
.gs-auth-alt { text-align: center; font-size: 13.5px; color: var(--gs-muted); }
.gs-auth-alt a { color: var(--gs-accent); text-decoration: none; font-weight: 600; }

/* ══ DASHBOARD (product page) ═════════════════════════════════════════════ */
.gs-dash-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 26px; }
.gs-dash-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
@media (min-width: 980px) { .gs-dash-grid { grid-template-columns: 1.6fr 1fr; align-items: start; } }
.gs-dash-col { display: flex; flex-direction: column; gap: 16px; }
.gs-stat-value { font-family: var(--font-fraunces, Georgia), serif; font-size: 24px; font-weight: 600; color: var(--gs-ink); letter-spacing: -0.01em; }
.gs-debt { border-radius: var(--gs-radius); padding: 20px; border-left: 4px solid var(--gs-line); }
.gs-debt-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.gs-debt-name { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: var(--gs-ink); }
.gs-debt-rank { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; border: 1px solid transparent; flex: none; }
.gs-debt-apr { font-size: 12px; font-weight: 700; color: var(--gs-accent); }
.gs-debt-meta { display: flex; gap: 12px; font-size: 12.5px; color: var(--gs-ink-soft); margin-left: 32px; }
.gs-debt-free { font-size: 11px; color: var(--gs-accent); margin-left: 32px; margin-top: 6px; }
.gs-ring-wrap { position: relative; width: 92px; height: 92px; margin: 6px 0 10px; }
.gs-ring { width: 100%; height: 100%; transform: rotate(-90deg); }
.gs-ring-track { fill: none; stroke: rgba(215,205,182,0.6); stroke-width: 8; }
.gs-ring-fill { fill: none; stroke: var(--gs-accent); stroke-width: 8; stroke-linecap: round; stroke-dasharray: 264; stroke-dashoffset: 58; }
.gs-ring-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-fraunces, Georgia), serif; font-size: 22px; font-weight: 700; color: var(--gs-ink); }
.gs-timeline { display: flex; flex-direction: column; gap: 9px; }
.gs-timeline-row { display: flex; justify-content: space-between; font-size: 12.5px; color: var(--gs-ink-soft); }
.gs-timeline-row span:first-child { color: var(--gs-muted); font-variant-numeric: tabular-nums; }
.gs-timeline-row--final span:last-child { color: var(--gs-accent); font-weight: 700; }

/* ══ FOOTER ═══════════════════════════════════════════════════════════════ */
.gs-footer { padding: 40px 20px 32px; }
.gs-footer-inner { max-width: 1160px; margin: 0 auto; border-radius: 22px; padding: 40px; }
.gs-footer-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 720px) { .gs-footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1fr; } }
.gs-footer-col h4 { font-family: var(--font-geist-mono, ui-monospace), monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gs-muted); margin: 0 0 14px; }
.gs-footer-col a { display: block; font-size: 14px; color: var(--gs-ink-soft); text-decoration: none; padding: 5px 0; transition: color .2s ease; }
.gs-footer-col a:hover { color: var(--gs-accent); }
.gs-footer-brand p { margin-top: 12px; max-width: 30ch; }
.gs-footer-bottom { max-width: 1160px; margin: 24px auto 0; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 12.5px; color: var(--gs-muted); }

.gs-note { text-align: center; font-size: 12px; color: var(--gs-muted); padding: 0 24px 24px; }

@media (prefers-reduced-motion: reduce) {
  .gs-glass::before, .gs-orb, .gs-prog-fill { animation: none; }
  .gs-glass--hover, .gs-btn { transition: none; }
  .gs-prog-fill { transform: scaleX(1); }
}
`
