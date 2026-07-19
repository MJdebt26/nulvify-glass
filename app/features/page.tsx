import Link from 'next/link'

const BIG: { icon: React.ReactNode; eyebrow: string; title: string; body: string; points: string[] }[] = [
  {
    icon: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
    eyebrow: 'The forecast',
    title: 'A debt-free date that holds up.',
    body: 'Most calculators assume a perfect, unchanging paycheck. We run a thousand simulations across the ways real income actually moves, then give you the median month your balance clears — a date you can plan a life around.',
    points: ['1,000 Monte-Carlo runs per plan', 'Median, not best-case', 'Updates as you log real payments'],
  },
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    eyebrow: 'The strategy',
    title: 'Avalanche or snowball, decided for you.',
    body: 'We compare every ordering of your debts, weigh interest saved against momentum, and recommend the one that fits your numbers — then show you exactly how much the alternative would cost so the choice is yours.',
    points: ['Side-by-side interest comparison', 'Momentum-aware ordering', 'Switch strategies anytime'],
  },
  {
    icon: <><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    eyebrow: 'The pulse',
    title: 'See interest burning in real time.',
    body: 'A live burn rate shows what your debt costs you per day. It is a quiet, motivating number — the kind that makes an unused subscription suddenly easy to cancel.',
    points: ['Daily & yearly burn rate', 'Milestone nudges', 'Progress you can feel'],
  },
]

const SMALL: [string, string][] = [
  ['Variable income modeling', 'Gig weeks and slow months are part of the math, not an afterthought.'],
  ['What-if scenarios', 'Drag a slider to see how an extra $50 reshapes your date.'],
  ['Net-worth tracking', 'Watch the gap between what you owe and what you own close.'],
  ['Accountability partner', 'Share milestones with someone who cheers you on.'],
  ['Credit-health view', 'Understand how payoff order nudges your score.'],
  ['Smart alerts', 'Quiet, useful nudges — never noise for its own sake.'],
]

export default function GlassFeatures() {
  return (
    <>
      <section className="lg-hero">
        <div className="lg-container">
          <div className="lg-shead lg-shead--left" style={{ marginBottom: 0, maxWidth: 720 }}>
            <span className="lg-eyebrow">Features</span>
            <h1 className="lg-display" style={{ fontSize: 'clamp(38px, 5.4vw, 66px)' }}>
              Everything you need to<br />believe the date.
            </h1>
            <p className="lg-lede" style={{ maxWidth: '52ch' }}>
              Depth where it earns its keep, calm everywhere else. Here&rsquo;s what&rsquo;s under the glass.
            </p>
          </div>
        </div>
      </section>

      {/* big alternating features */}
      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {BIG.map((f, i) => (
            <div className="lg-card lg-glass lg-glass--hover" key={f.title} style={{ padding: 'clamp(28px, 4vw, 44px)' }}>
              <div style={{ display: 'grid', gap: 'clamp(24px, 4vw, 48px)', gridTemplateColumns: '1fr', alignItems: 'center' }}
                className={`lg-feat-row${i % 2 ? ' lg-feat-row--rev' : ''}`}>
                <div>
                  <span className="lg-eyebrow">{f.eyebrow}</span>
                  <h2 className="lg-h2" style={{ margin: '14px 0 16px' }}>{f.title}</h2>
                  <p className="lg-body" style={{ fontSize: 16 }}>{f.body}</p>
                  <ul className="lg-price-list" style={{ margin: '22px 0 0' }}>
                    {f.points.map(p => (
                      <li key={p}>
                        <svg className="lg-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="lg-feature-icon" style={{ width: 120, height: 120, borderRadius: 28 }}>
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* small feature grid */}
      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">And the details</span>
            <h2 className="lg-h1">The small things, done right.</h2>
          </div>
          <div className="lg-grid lg-grid--3">
            {SMALL.map(([t, b]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={t}>
                <h3 className="lg-h3" style={{ fontSize: 17 }}>{t}</h3>
                <p className="lg-body lg-body--sm" style={{ marginTop: 8 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container">
          <div className="lg-cta-band lg-glass lg-glass--refract">
            <span className="lg-eyebrow">Ready when you are</span>
            <h2 className="lg-h1">Put your numbers in. See the date.</h2>
            <div className="lg-hero-btns">
              <Link href="/signup" className="lg-btn lg-btn--primary lg-btn--lg">Get started free</Link>
              <Link href="/pricing" className="lg-btn lg-btn--glass lg-btn--lg">Compare plans</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 820px) {
          .lg-feat-row { grid-template-columns: 1.3fr 0.7fr !important; }
          .lg-feat-row--rev > div:first-child { order: 2; }
        }
      `}</style>
    </>
  )
}
