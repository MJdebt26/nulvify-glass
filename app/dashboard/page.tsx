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
    <section className="gs-section" style={{ paddingTop: 'clamp(28px, 5vh, 48px)' }}>
      <div className="gs-container">
        <div className="gs-dash-head">
          <div>
            <span className="gs-eyebrow">The product</span>
            <h1 className="gs-h1" style={{ marginTop: 10 }}>Welcome back, Maya.</h1>
            <p className="gs-body" style={{ marginTop: 6 }}>You&rsquo;re 68% of the way to zero. Here&rsquo;s today&rsquo;s one move.</p>
          </div>
          <Link href="/pricing" className="gs-btn gs-btn--glass gs-btn--sm">Upgrade to Pro</Link>
        </div>

        {/* summary stats */}
        <div className="gs-stats" style={{ marginBottom: 22 }}>
          {STATS.map(([label, value]) => (
            <div className="gs-card gs-glass gs-glass--hover" key={label} style={{ padding: 20, textAlign: 'left' }}>
              <div className="gs-label" style={{ marginBottom: 8 }}>{label}</div>
              <div className="gs-stat-value">{value}</div>
            </div>
          ))}
        </div>

        <div className="gs-dash-grid">
          {/* main column */}
          <div className="gs-dash-col">
            <div className="gs-card gs-glass gs-glass--hover">
              <span className="gs-eyebrow">Recommended strategy</span>
              <h2 className="gs-h3" style={{ margin: '10px 0 8px' }}>Avalanche</h2>
              <p className="gs-body gs-body--sm">
                Pay minimums everywhere, then throw every extra dollar at Chase Sapphire first &mdash;
                it carries the highest rate, so clearing it first saves the most interest.
              </p>
            </div>

            {DEBTS.map(d => (
              <div className="gs-debt gs-glass gs-glass--hover" key={d.name} style={{ borderLeftColor: d.color }}>
                <div className="gs-debt-top">
                  <div className="gs-debt-name">
                    <span className="gs-debt-rank" style={{ color: d.color, background: `${d.color}14`, borderColor: `${d.color}40` }}>{d.rank}</span>
                    {d.name}
                  </div>
                  <span className="gs-debt-apr">{d.apr}% APR</span>
                </div>
                <div className="gs-debt-meta">
                  <span>{d.balance} remaining</span>
                  <span style={{ color: 'var(--gs-muted)' }}>&middot;</span>
                  <span>Min. {d.min}/mo</span>
                </div>
                <div className="gs-debt-free">Free by {d.free}</div>
              </div>
            ))}
          </div>

          {/* side column */}
          <div className="gs-dash-col">
            <div className="gs-card gs-glass gs-glass--hover">
              <span className="gs-eyebrow gs-eyebrow--muted">Debt velocity</span>
              <div className="gs-ring-wrap">
                <svg viewBox="0 0 100 100" className="gs-ring">
                  <circle cx="50" cy="50" r="42" className="gs-ring-track" />
                  <circle cx="50" cy="50" r="42" className="gs-ring-fill" />
                </svg>
                <span className="gs-ring-num">78</span>
              </div>
              <p className="gs-body gs-body--sm">Faster than 78% of similar plans.</p>
            </div>

            <div className="gs-card gs-glass gs-glass--hover">
              <span className="gs-eyebrow gs-eyebrow--muted">Interest burn rate</span>
              <div className="gs-stat-value" style={{ fontSize: 28, margin: '8px 0 4px' }}>$4.12<span style={{ fontSize: 14, color: 'var(--gs-muted)', fontWeight: 500 }}> /day</span></div>
              <p className="gs-body gs-body--sm">$1,504 this year if nothing changes.</p>
            </div>

            <div className="gs-card gs-glass gs-glass--hover">
              <span className="gs-eyebrow gs-eyebrow--muted">Freedom timeline</span>
              <div className="gs-timeline" style={{ marginTop: 12 }}>
                <div className="gs-timeline-row"><span>Sep 2026</span><span>Chase Sapphire clear</span></div>
                <div className="gs-timeline-row"><span>Nov 2026</span><span>Honda Civic clear</span></div>
                <div className="gs-timeline-row"><span>Feb 2027</span><span>Sallie Mae clear</span></div>
                <div className="gs-timeline-row gs-timeline-row--final"><span>Jun 2027</span><span>Debt-free</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
