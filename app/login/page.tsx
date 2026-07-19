import Link from 'next/link'

export default function GlassLogin() {
  return (
    <div className="lg-auth-wrap">
      <div className="lg-auth-card lg-glass lg-glass--refract">
        <div style={{ textAlign: 'center' }}>
          <span className="lg-eyebrow">Welcome back</span>
          <h1 className="lg-h2" style={{ marginTop: 12 }}>Log in to Nulvify.</h1>
        </div>

        <div className="lg-field">
          <label className="lg-label" htmlFor="email">Email</label>
          <input id="email" className="lg-input" type="email" placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="lg-field">
          <label className="lg-label" htmlFor="pw">Password</label>
          <input id="pw" className="lg-input" type="password" placeholder="••••••••" autoComplete="current-password" />
        </div>

        <button className="lg-btn lg-btn--primary" style={{ width: '100%' }}>Log in</button>
        <button className="lg-btn lg-btn--glass" style={{ width: '100%' }}>Continue with Google</button>

        <p className="lg-auth-alt">
          New here? <Link href="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  )
}
