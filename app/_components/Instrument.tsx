'use client'

import { useMemo, useState } from 'react'

/**
 * Instrument — a live, front-end-only model of the original site's forecaster.
 * Two sliders (what you owe / monthly payment) drive a debt-free date and an
 * animated payoff "fan" — the median path bold, illustrative sibling paths
 * faint (evoking the Monte-Carlo chart). All math runs client-side; there is
 * no backend and these are illustrative figures, not advice.
 */
const APR = 0.199
const M = APR / 12
const CAP = 600
const FACTORS = [1.2, 1.11, 1.05, 0.96, 0.9, 0.84] // sibling payment paths for the fan

function simulate(balance: number, payment: number) {
  let b = balance, interest = 0, m = 0
  const series = [b]
  while (b > 0.5 && m < CAP) {
    const i = b * M
    interest += i
    b = Math.max(0, b + i - payment)
    series.push(b)
    m++
  }
  const viable = payment > balance * M + 0.5 && m < CAP
  return { series, months: m, interest, viable }
}

// Baseline: a steady 2%-of-balance minimum payment (bounded, believable) — the
// "just pay the minimum" path we measure interest saved against.
function minOnlyInterest(balance: number) {
  const min = Math.max(25, balance * 0.02)
  let b = balance, interest = 0, m = 0
  while (b > 0.5 && m < CAP) {
    const i = b * M
    interest += i
    b = Math.max(0, b + i - min)
    m++
  }
  return interest
}

function addMonths(n: number) {
  const d = new Date()
  d.setDate(1)
  d.setMonth(d.getMonth() + n)
  return d.toLocaleString('en-US', { month: 'long', year: 'numeric' })
}
const usd = (x: number) => '$' + Math.round(x).toLocaleString('en-US')

const W = 600, H = 210, PAD = 14

export default function Instrument() {
  const [balance, setBalance] = useState(32450)
  const [payment, setPayment] = useState(760)

  const model = useMemo(() => {
    const main = simulate(balance, payment)
    const fan = FACTORS.map(f => simulate(balance, payment * f))
    const viableMonths = [main, ...fan].filter(s => s.viable).map(s => s.months)
    const longest = viableMonths.length ? Math.max(...viableMonths) : CAP
    const xMax = Math.max(6, Math.min(120, Math.ceil((main.viable ? main.months : longest) * 1.25)))
    const saved = main.viable ? Math.max(0, minOnlyInterest(balance) - main.interest) : 0
    return { main, fan, xMax, yMax: balance, saved }
  }, [balance, payment])

  const { main, fan, xMax, yMax, saved } = model
  const px = (m: number) => PAD + (m / xMax) * (W - 2 * PAD)
  const py = (b: number) => H - PAD - (b / yMax) * (H - 2 * PAD)
  const line = (series: number[]) =>
    series.slice(0, xMax + 1).map((b, i) => `${i === 0 ? 'M' : 'L'} ${px(i).toFixed(1)} ${py(b).toFixed(1)}`).join(' ')
  const area = (series: number[]) => {
    const pts = series.slice(0, xMax + 1)
    if (pts.length < 2) return ''
    return `${line(series)} L ${px(pts.length - 1).toFixed(1)} ${py(0).toFixed(1)} L ${px(0).toFixed(1)} ${py(0).toFixed(1)} Z`
  }
  const zeroX = main.viable ? px(main.months) : null

  const balPct = ((balance - 1000) / (60000 - 1000)) * 100
  const payPct = ((payment - 150) / (2500 - 150)) * 100

  return (
    <section className="lg-section">
      <div className="lg-container">
        <div className="lg-shead">
          <span className="lg-eyebrow">The instrument</span>
          <h2 className="lg-h1">Move one number. Watch the date move.</h2>
          <p className="lg-lede">A live model of the forecast &mdash; drag a slider and your debt-free date reshapes in real time.</p>
        </div>

        <div className="lg-card lg-glass lg-glass--refract" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
          <div className="lg-inst-grid">
            {/* controls */}
            <div className="lg-inst-controls">
              <div>
                <div className="lg-ctrl-head"><span className="lg-ctrl-name">What you owe</span><span className="lg-ctrl-val">{usd(balance)}</span></div>
                <input className="lg-range" type="range" min={1000} max={60000} step={500} value={balance}
                  onChange={e => setBalance(+e.target.value)} style={{ ['--fill' as string]: balPct + '%' } as React.CSSProperties} aria-label="What you owe" />
              </div>
              <div>
                <div className="lg-ctrl-head"><span className="lg-ctrl-name">Monthly payment</span><span className="lg-ctrl-val">{usd(payment)}</span></div>
                <input className="lg-range" type="range" min={150} max={2500} step={25} value={payment}
                  onChange={e => setPayment(+e.target.value)} style={{ ['--fill' as string]: payPct + '%' } as React.CSSProperties} aria-label="Monthly payment" />
              </div>
              <p className="lg-body lg-body--sm" style={{ color: 'var(--lg-muted)' }}>
                Modeled at {(APR * 100).toFixed(1)}% blended APR across illustrative paths. A model, not advice.
              </p>
            </div>

            {/* readout + fan chart */}
            <div className="lg-inst-readout">
              <span className="lg-inst-eyebrow">{main.viable ? 'Debt-free by' : 'Not quite there'}</span>
              <div className="lg-inst-date">{main.viable ? addMonths(main.months) : 'Raise the payment ↑'}</div>
              <div className="lg-inst-metrics">
                <div className="lg-inst-metric"><div className="v">{main.viable ? main.months : '—'}</div><div className="k">months to zero</div></div>
                <div className="lg-inst-metric"><div className="v">{main.viable ? usd(main.interest) : '—'}</div><div className="k">interest you pay</div></div>
                <div className="lg-inst-metric"><div className="v accent">{main.viable ? usd(saved) : '—'}</div><div className="k">saved vs. minimums</div></div>
              </div>

              <svg className="lg-fan" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Projected balance falling to zero over time">
                <line className="lg-fan-axis" x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} />
                {main.viable && <path className="lg-fan-fill" d={area(main.series)} />}
                {fan.map((s, i) => (s.viable ? <path key={i} className="lg-fan-sim" d={line(s.series)} /> : null))}
                <path className="lg-fan-median" d={line(main.series)} />
                {zeroX != null && (
                  <>
                    <circle className="lg-fan-zero" cx={zeroX} cy={py(0)} r={4} />
                    <text className="lg-fan-zlabel" x={Math.min(zeroX + 8, W - 44)} y={py(0) - 8}>Zero</text>
                  </>
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
