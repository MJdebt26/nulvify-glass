import Link from 'next/link'

const COLS: { title: string; links: [string, string][] }[] = [
  { title: 'Product', links: [['Features', '/features'], ['Pricing', '/pricing'], ['Dashboard', '/dashboard']] },
  { title: 'Company', links: [['About', '/about'], ['Careers', '/'], ['Contact', '/']] },
  { title: 'Legal', links: [['Privacy', '/'], ['Terms', '/'], ['Security', '/']] },
]

export default function LiquidFooter() {
  return (
    <footer className="lg-footer">
      <div className="lg-footer-inner lg-glass">
        <div className="lg-footer-grid">
          <div className="lg-footer-col lg-footer-brand">
            <Link href="/" className="lg-wordmark">Nulvify<span className="lg-wordmark-dot">.</span></Link>
            <p className="lg-body lg-body--sm">
              See the day you&rsquo;re debt-free, then walk toward it with a plan that adjusts as your life does.
            </p>
          </div>
          {COLS.map(col => (
            <div className="lg-footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(([label, href]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="lg-footer-bottom">
        <span>&copy; 2026 Nulvify. A glass-UI exploration.</span>
        <span>Made calm, on purpose.</span>
      </div>
    </footer>
  )
}
