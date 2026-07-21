'use client'

import { useEffect, useState } from 'react'

/**
 * LiveInterest — the original site's national "interest desk" debt clock, but
 * dialed way down: a small, quiet, always-ticking figure instead of a giant
 * hero. Counts up the running U.S. credit-card interest for the year in real
 * time. Illustrative figure, computed client-side — no backend.
 */
const ANNUAL = 170_000_000_000 // ~US credit-card interest / yr (illustrative)
const SEC_PER_YEAR = 365.25 * 24 * 3600
const PER_SEC = ANNUAL / SEC_PER_YEAR // ≈ $5,388 / second

function yearToDate() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 1).getTime()
  return ((now.getTime() - start) / 1000) * PER_SEC
}

export default function LiveInterest() {
  const [n, setN] = useState<number | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(yearToDate()); return }
    const base = yearToDate()
    const t0 = performance.now()
    const id = setInterval(() => setN(base + ((performance.now() - t0) / 1000) * PER_SEC), 90)
    setN(base)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="lg-tick-wrap">
      <div className="lg-tick lg-glass" aria-label="Live U.S. credit-card interest counter">
        <span className="lg-tick-dot" />
        <span className="lg-tick-label">Americans have paid</span>
        <span className="lg-tick-num">{n == null ? '$—' : '$' + Math.floor(n).toLocaleString('en-US')}</span>
        <span className="lg-tick-label">in credit-card interest this year</span>
      </div>
    </div>
  )
}
