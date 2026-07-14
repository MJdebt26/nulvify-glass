import Link from 'next/link'

export default function GlassSignup() {
  return (
    <div className="gs-auth-wrap">
      <div className="gs-auth-card gs-glass">
        <div style={{ textAlign: 'center' }}>
          <span className="gs-eyebrow">Two minutes, no card</span>
          <h1 className="gs-h2" style={{ marginTop: 12 }}>Find your debt-free date.</h1>
          <p className="gs-body gs-body--sm" style={{ marginTop: 8 }}>Start with a single number. You can add detail later.</p>
        </div>

        <div className="gs-field">
          <label className="gs-label" htmlFor="name">First name</label>
          <input id="name" className="gs-input" type="text" placeholder="Maya" autoComplete="given-name" />
        </div>
        <div className="gs-field">
          <label className="gs-label" htmlFor="email">Email</label>
          <input id="email" className="gs-input" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="gs-field">
          <label className="gs-label" htmlFor="debt">Total debt (rough is fine)</label>
          <input id="debt" className="gs-input" type="text" inputMode="numeric" placeholder="$32,000" />
        </div>

        <button className="gs-btn gs-btn--primary" style={{ width: '100%' }}>Show me my date</button>

        <p className="gs-auth-alt">
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}
