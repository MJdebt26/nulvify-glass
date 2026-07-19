import Link from 'next/link'

const FREE = ['Your debt-free date', 'One payoff strategy', 'Up to 3 debts tracked', 'Interest burn rate', 'Monthly check-in']
const PRO = ['Everything in Free', 'Unlimited debts', '1,000-run forecasts', 'Variable-income modeling', 'Unlimited what-if scenarios', 'Net-worth & credit view', 'Accountability partner']

const FAQ: [string, string][] = [
  ['Is my financial data safe?', 'Your numbers stay yours. This exploration stores nothing real — in the product, data is encrypted in transit and at rest, and never sold.'],
  ['Do I need to link my bank?', 'No. You can start with a single number typed by hand. Linking accounts is optional and only ever speeds up data entry.'],
  ['Can I cancel anytime?', 'Yes. Pro is month to month. Cancel in one click and you keep your plan on the Free tier.'],
  ['What makes the date trustworthy?', 'Every date is the median of a thousand simulations across how your income actually moves — not a single optimistic straight-line guess.'],
]

function Card({ name, price, per, blurb, points, feat, cta }: {
  name: string; price: string; per?: string; blurb: string; points: string[]; feat?: boolean; cta: string
}) {
  return (
    <div className={`lg-price-card lg-glass lg-glass--hover${feat ? ' lg-price-card--feat lg-glass--refract' : ''}`}>
      {feat && <span className="lg-price-badge">Most popular</span>}
      <div className="lg-price-name">{name}</div>
      <div className="lg-price-num">{price}{per && <small> {per}</small>}</div>
      <p className="lg-body lg-body--sm">{blurb}</p>
      <ul className="lg-price-list">
        {points.map(p => (
          <li key={p}>
            <svg className="lg-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            {p}
          </li>
        ))}
      </ul>
      <Link href="/signup" className={`lg-btn ${feat ? 'lg-btn--primary' : 'lg-btn--glass'}`} style={{ width: '100%' }}>{cta}</Link>
    </div>
  )
}

export default function GlassPricing() {
  return (
    <>
      <section className="lg-hero" style={{ paddingBottom: 0 }}>
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">Pricing</span>
            <h1 className="lg-display" style={{ fontSize: 'clamp(38px, 5.4vw, 66px)' }}>Honest math, honest price.</h1>
            <p className="lg-lede">Start free. Upgrade only when you want the deep forecast. No trials that trap you, no surprises.</p>
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 'clamp(32px, 5vh, 56px)' }}>
        <div className="lg-container">
          <div className="lg-price-grid">
            <Card name="Free" price="$0" blurb="Everything you need to find your date and take the first step."
              points={FREE} cta="Start free" />
            <Card name="Pro" price="$6" per="/ month" feat blurb="The full forecast for real, changing income — and every scenario you can dream up."
              points={PRO} cta="Upgrade to Pro" />
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container" style={{ maxWidth: 760 }}>
          <div className="lg-shead">
            <span className="lg-eyebrow">Questions</span>
            <h2 className="lg-h1">Good to know.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQ.map(([q, a]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={q}>
                <h3 className="lg-h3" style={{ fontSize: 17, marginBottom: 8 }}>{q}</h3>
                <p className="lg-body lg-body--sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
