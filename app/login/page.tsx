import Link from 'next/link'

export default function GlassLogin() {
  return (
    <div className="gs-auth-wrap">
      <div className="gs-auth-card gs-glass">
        <div style={{ textAlign: 'center' }}>
          <span className="gs-eyebrow">Welcome back</span>
          <h1 className="gs-h2" style={{ marginTop: 12 }}>Log in to Nulvify.</h1>
        </div>

        <div className="gs-field">
          <label className="gs-label" htmlFor="email">Email</label>
          <input id="email" className="gs-input" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="gs-field">
          <label className="gs-label" htmlFor="pw">Password</label>
          <input id="pw" className="gs-input" type="password" placeholder="••••••••" autoComplete="current-password" />
        </div>

        <button className="gs-btn gs-btn--primary" style={{ width: '100%' }}>Log in</button>
        <button className="gs-btn gs-btn--glass" style={{ width: '100%' }}>Continue with Google</button>

        <p className="gs-auth-alt">
          New here? <Link href="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
