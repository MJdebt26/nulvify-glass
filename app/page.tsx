import Link from 'next/link'

const FEATURES: { icon: React.ReactNode; title: string; body: string }[] = [
  {
    icon: <path d="M3 3v18h18M7 14l4-4 3 3 5-6" />,
    title: 'A date you can trust',
    body: 'We run a thousand futures over your real numbers and hand you the median month your balance clears — not a hopeful guess.',
  },
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    title: 'Built for real income',
    body: 'Gig weeks, slow months, a surprise bonus. The plan models the wobble instead of pretending your paycheck is a straight line.',
  },
  {
    icon: <><path d="M20 6 9 17l-5-5" /></>,
    title: 'One clear next move',
    body: 'No jargon, no forty-tab spreadsheet. Every visit shows the single payment that buys you the most freedom this month.',
  },
]

const STEPS: [string, string, string][] = [
  ['01', 'Tell us what you owe', 'Balances, rates, and minimums — or a single number to start. Two minutes, no account required.'],
  ['02', 'We run the math', 'A thousand simulations across every likely future find the month your debt actually hits zero.'],
  ['03', 'You get a date to circle', 'A clear plan that adjusts as your life changes, and one honest next step every time you check in.'],
]

const QUOTES: [string, string, string, string][] = [
  ['Saw my debt-free date and cried. June 2027. It felt real for the first time.', 'MR', 'Maya R.', 'Nurse, Ohio'],
  ['The variable-income model is the first one that actually fit my freelance life.', 'DK', 'Devin K.', 'Designer, freelance'],
  ['Watching the interest burn rate made me cancel two subscriptions on the spot.', 'MT', 'Marcus T.', 'Teacher, Texas'],
]

export default function GlassHome() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="lg-hero">
        <div className="lg-container lg-hero-grid">
          <div className="lg-hero-copy">
            <span className="lg-eyebrow">Debt freedom, made calm</span>
            <h1 className="lg-display">Know the day<br />you&rsquo;re <span className="lg-accent">debt-free</span>.</h1>
            <p className="lg-lede">
              Nulvify turns your balances into a single, trustworthy date &mdash; then walks you toward it
              one clear step at a time.
            </p>
            <div className="lg-hero-btns">
              <Link href="/signup" className="lg-btn lg-btn--primary lg-btn--lg">Get my debt-free date</Link>
              <Link href="/features" className="lg-btn lg-btn--glass lg-btn--lg">See how it works</Link>
            </div>
            <div className="lg-hero-trust">
              <div className="lg-avatars">
                <span style={{ background: '#9A3B2C' }}>MR</span>
                <span style={{ background: '#4F6450' }}>DK</span>
                <span style={{ background: '#C9A14A' }}>MT</span>
                <span style={{ background: '#3F3A30' }}>+</span>
              </div>
              <span className="lg-body lg-body--sm">Joined by 12,400+ people this year</span>
            </div>
          </div>

          {/* the glass showcase card — the star (real refraction + 3D tilt via LiquidFX) */}
          <div className="lg-hero-card lg-glass" data-lg-tilt>
            <div className="lg-hero-card-top">
              <div>
                <span className="lg-eyebrow lg-eyebrow--muted">Your debt-free date</span>
                <div className="lg-hero-date">June 2027</div>
                <div className="lg-hero-sub">32 months from today &middot; median of 1,000 runs</div>
              </div>
            </div>
            <div className="lg-prog">
              <div className="lg-prog-track"><div className="lg-prog-fill" /></div>
              <div className="lg-prog-ends"><span>Today</span><span>Jun 2027</span></div>
            </div>
            <div className="lg-hero-rows">
              <div className="lg-hero-row"><span>Total debt</span><span>$32,450</span></div>
              <div className="lg-hero-row"><span>Interest saved vs. minimums</span><span className="lg-accent">$8,240</span></div>
              <div className="lg-hero-row"><span>Next step</span><span>+$120 to Chase</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="lg-section--tight">
        <div className="lg-container">
          <div className="lg-stats">
            {[['$41M', 'Interest saved for members'], ['1,000', 'Futures modeled per plan'], ['12,400+', 'Debt-free dates found'], ['4.9/5', 'Average member rating']].map(([n, l]) => (
              <div className="lg-stat lg-glass lg-glass--hover" key={l as string}>
                <div className="lg-stat-num">{n}</div>
                <div className="lg-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">Why it works</span>
            <h2 className="lg-h1">Clarity, not another spreadsheet.</h2>
            <p className="lg-lede">Everything you need to believe the date &mdash; and nothing you don&rsquo;t.</p>
          </div>
          <div className="lg-grid lg-grid--3">
            {FEATURES.map(f => (
              <div className="lg-card lg-feature lg-glass lg-glass--hover" key={f.title}>
                <div className="lg-feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </div>
                <h3 className="lg-h3">{f.title}</h3>
                <p className="lg-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">How it works</span>
            <h2 className="lg-h1">From what you owe to the day you&rsquo;re free.</h2>
          </div>
          <div className="lg-steps">
            {STEPS.map(([n, title, body]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={n}>
                <div className="lg-step-num">{n}</div>
                <h3 className="lg-h3">{title}</h3>
                <p className="lg-body" style={{ marginTop: 10 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">In their words</span>
            <h2 className="lg-h1">The moment the number turns real.</h2>
          </div>
          <div className="lg-grid lg-grid--3">
            {QUOTES.map(([quote, av, name, role]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={name}>
                <p className="lg-quote">&ldquo;{quote}&rdquo;</p>
                <div className="lg-quote-by">
                  <div className="lg-quote-av">{av}</div>
                  <div>
                    <div className="lg-quote-name">{name}</div>
                    <div className="lg-quote-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────────── */}
      <section className="lg-section">
        <div className="lg-container">
          <div className="lg-cta-band lg-glass lg-glass--refract">
            <span className="lg-eyebrow">Two minutes, no account</span>
            <h2 className="lg-h1">Find the day you stop owing.</h2>
            <p className="lg-lede" style={{ maxWidth: '46ch', marginInline: 'auto' }}>
              Enter what you owe and watch your debt-free date appear. It&rsquo;s the most hopeful math you&rsquo;ll do all year.
            </p>
            <div className="lg-hero-btns">
              <Link href="/signup" className="lg-btn lg-btn--primary lg-btn--lg">Get my debt-free date</Link>
              <Link href="/pricing" className="lg-btn lg-btn--glass lg-btn--lg">See pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
