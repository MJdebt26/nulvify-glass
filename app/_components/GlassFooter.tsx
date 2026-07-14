import Link from 'next/link'

const COLS: { title: string; links: [string, string][] }[] = [
  { title: 'Product', links: [['Features', '/features'], ['Pricing', '/pricing'], ['Dashboard', '/dashboard']] },
  { title: 'Company', links: [['About', '/about'], ['Careers', '/'], ['Contact', '/']] },
  { title: 'Legal', links: [['Privacy', '/'], ['Terms', '/'], ['Security', '/']] },
]

export default function GlassFooter() {
  return (
    <footer className="gs-footer">
      <div className="gs-footer-inner gs-glass">
        <div className="gs-footer-grid">
          <div className="gs-footer-col gs-footer-brand">
            <Link href="/" className="gs-wordmark">Nulvify<span className="gs-wordmark-dot">.</span></Link>
            <p className="gs-body gs-body--sm">
              See the day you&rsquo;re debt-free, then walk toward it with a plan that adjusts as your life does.
            </p>
          </div>
          {COLS.map(col => (
            <div className="gs-footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(([label, href]) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="gs-footer-bottom">
        <span>&copy; 2026 Nulvify. A glass-UI exploration.</span>
        <span>Made calm, on purpose.</span>
      </div>
    </footer>
  )
}
