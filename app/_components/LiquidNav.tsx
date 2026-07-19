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

export default function LiquidNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname.startsWith(href)

  return (
    <header className="lg-nav">
      <div className="lg-nav-inner">
        <Link href="/" className="lg-wordmark" onClick={() => setOpen(false)}>
          Nulvify<span className="lg-wordmark-dot">.</span>
        </Link>

        <nav className="lg-nav-links">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className={`lg-nav-link${isActive(l.href) ? ' lg-nav-link--active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="lg-nav-actions">
          <Link href="/login" className="lg-nav-link lg-nav-desktop-only">Log in</Link>
          <Link href="/signup" className="lg-btn lg-btn--primary lg-btn--sm lg-nav-desktop-only">
            Get started
          </Link>
          <button className="lg-nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open
                ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg-nav-mobile${open ? ' lg-nav-mobile--open' : ''}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
            className={`lg-nav-link${isActive(l.href) ? ' lg-nav-link--active' : ''}`}>
            {l.label}
          </Link>
        ))}
        <Link href="/login" className="lg-nav-link" onClick={() => setOpen(false)}>Log in</Link>
        <Link href="/signup" className="lg-btn lg-btn--primary" onClick={() => setOpen(false)}>
          Get started
        </Link>
      </div>
    </header>
  )
}
