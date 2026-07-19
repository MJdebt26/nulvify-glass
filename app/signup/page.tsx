import Link from 'next/link'

export default function GlassSignup() {
  return (
    <div className="lg-auth-wrap">
      <div className="lg-auth-card lg-glass lg-glass--refract">
        <div style={{ textAlign: 'center' }}>
          <span className="lg-eyebrow">Two minutes, no card</span>
          <h1 className="lg-h2" style={{ marginTop: 12 }}>Find your debt-free date.</h1>
          <p className="lg-body lg-body--sm" style={{ marginTop: 8 }}>Start with a single number. You can add detail later.</p>
        </div>

        <div className="lg-field">
          <label className="lg-label" htmlFor="name">First name</label>
          <input id="name" className="lg-input" type="text" placeholder="Maya" autoComplete="given-name" />
        </div>
        <div className="lg-field">
          <label className="lg-label" htmlFor="email">Email</label>
          <input id="email" className="lg-input" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="lg-field">
          <label className="lg-label" htmlFor="debt">Total debt (rough is fine)</label>
          <input id="debt" className="lg-input" type="text" inputMode="numeric" placeholder="$32,000" />
        </div>

        <button className="lg-btn lg-btn--primary" style={{ width: '100%' }}>Show me my date</button>

        <p className="lg-auth-alt">
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}
