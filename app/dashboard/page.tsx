import Link from 'next/link'

const STATS: [string, string][] = [
  ['Total debt', '$32,450'],
  ['Debts tracked', '4'],
  ['Projected free', 'Jun 2027'],
  ['Monthly budget', '$1,240'],
]

const DEBTS = [
  { rank: 1, name: 'Chase Sapphire', apr: '24.99', balance: '$8,120', min: '$210', free: 'Sep 2026', color: '#DC2626' },
  { rank: 2, name: 'Sallie Mae', apr: '6.80', balance: '$14,300', min: '$180', free: 'Feb 2027', color: '#2563EB' },
  { rank: 3, name: 'Honda Civic', apr: '4.20', balance: '$6,900', min: '$260', free: 'Nov 2026', color: '#EAB308' },
  { rank: 4, name: 'Care Credit', apr: '18.50', balance: '$3,130', min: '$90', free: 'Jun 2027', color: '#7C3AED' },
]

export default function GlassDashboard() {
  return (
    <section className="lg-section" style={{ paddingTop: 'clamp(28px, 5vh, 48px)' }}>
      <div className="lg-container">
        <div className="lg-dash-head">
          <div>
            <span className="lg-eyebrow">The product</span>
            <h1 className="lg-h1" style={{ marginTop: 10 }}>Welcome back, Maya.</h1>
            <p className="lg-body" style={{ marginTop: 6 }}>You&rsquo;re 68% of the way to zero. Here&rsquo;s today&rsquo;s one move.</p>
          </div>
          <Link href="/pricing" className="lg-btn lg-btn--glass lg-btn--sm">Upgrade to Pro</Link>
        </div>

        {/* summary stats */}
        <div className="lg-stats" style={{ marginBottom: 22 }}>
          {STATS.map(([label, value]) => (
            <div className="lg-card lg-glass lg-glass--hover" key={label} style={{ padding: 20, textAlign: 'left' }}>
              <div className="lg-label" style={{ marginBottom: 8 }}>{label}</div>
              <div className="lg-stat-value">{value}</div>
            </div>
          ))}
        </div>

        <div className="lg-dash-grid">
          {/* main column */}
          <div className="lg-dash-col">
            <div className="lg-card lg-glass lg-glass--hover">
              <span className="lg-eyebrow">Recommended strategy</span>
              <h2 className="lg-h3" style={{ margin: '10px 0 8px' }}>Avalanche</h2>
              <p className="lg-body lg-body--sm">
                Pay minimums everywhere, then throw every extra dollar at Chase Sapphire first &mdash;
                it carries the highest rate, so clearing it first saves the most interest.
              </p>
            </div>

            {DEBTS.map(d => (
              <div className="lg-debt lg-glass lg-glass--hover" key={d.name} style={{ borderLeftColor: d.color }}>
                <div className="lg-debt-top">
                  <div className="lg-debt-name">
                    <span className="lg-debt-rank" style={{ color: d.color, background: `${d.color}14`, borderColor: `${d.color}40` }}>{d.rank}</span>
                    {d.name}
                  </div>
                  <span className="lg-debt-apr">{d.apr}% APR</span>
                </div>
                <div className="lg-debt-meta">
                  <span>{d.balance} remaining</span>
                  <span style={{ color: 'var(--lg-muted)' }}>&middot;</span>
                  <span>Min. {d.min}/mo</span>
                </div>
                <div className="lg-debt-free">Free by {d.free}</div>
              </div>
            ))}
          </div>

          {/* side column */}
          <div className="lg-dash-col">
            <div className="lg-card lg-glass lg-glass--hover">
              <span className="lg-eyebrow lg-eyebrow--muted">Debt velocity</span>
              <div className="lg-ring-wrap">
                <svg viewBox="0 0 100 100" className="lg-ring">
                  <circle cx="50" cy="50" r="42" className="lg-ring-track" />
                  <circle cx="50" cy="50" r="42" className="lg-ring-fill" />
                </svg>
                <span className="lg-ring-num">78</span>
              </div>
              <p className="lg-body lg-body--sm">Faster than 78% of similar plans.</p>
            </div>

            <div className="lg-card lg-glass lg-glass--hover">
              <span className="lg-eyebrow lg-eyebrow--muted">Interest burn rate</span>
              <div className="lg-stat-value" style={{ fontSize: 28, margin: '8px 0 4px' }}>$4.12<span style={{ fontSize: 14, color: 'var(--lg-muted)', fontWeight: 500 }}> /day</span></div>
              <p className="lg-body lg-body--sm">$1,504 this year if nothing changes.</p>
            </div>

            <div className="lg-card lg-glass lg-glass--hover">
              <span className="lg-eyebrow lg-eyebrow--muted">Freedom timeline</span>
              <div className="lg-timeline" style={{ marginTop: 12 }}>
                <div className="lg-timeline-row"><span>Sep 2026</span><span>Chase Sapphire clear</span></div>
                <div className="lg-timeline-row"><span>Nov 2026</span><span>Honda Civic clear</span></div>
                <div className="lg-timeline-row"><span>Feb 2027</span><span>Sallie Mae clear</span></div>
                <div className="lg-timeline-row lg-timeline-row--final"><span>Jun 2027</span><span>Debt-free</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
