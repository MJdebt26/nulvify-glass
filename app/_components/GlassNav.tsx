'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Product' },
  { href: '/about', label: 'About' },
]

export default function GlassNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname.startsWith(href)

  return (
    <header className="gs-nav">
      <div className="gs-nav-inner">
        <Link href="/" className="gs-wordmark" onClick={() => setOpen(false)}>
          Nulvify<span className="gs-wordmark-dot">.</span>
        </Link>

        <nav className="gs-nav-links">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={`gs-nav-link${isActive(l.href) ? ' gs-nav-link--active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="gs-nav-actions">
          <Link href="/login" className="gs-nav-link gs-nav-desktop-only">Log in</Link>
          <Link href="/signup" className="gs-btn gs-btn--primary gs-btn--sm gs-nav-desktop-only">
            Get started
          </Link>
          <button className="gs-nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open
                ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      <div className={`gs-nav-mobile${open ? ' gs-nav-mobile--open' : ''}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
            className={`gs-nav-link${isActive(l.href) ? ' gs-nav-link--active' : ''}`}>
            {l.label}
          </Link>
        ))}
        <Link href="/login" className="gs-nav-link" onClick={() => setOpen(false)}>Log in</Link>
        <Link href="/signup" className="gs-btn gs-btn--primary" onClick={() => setOpen(false)}>
          Get started
        </Link>
      </div>
    </header>
  )
}
