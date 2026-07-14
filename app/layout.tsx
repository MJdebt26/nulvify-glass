import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { GLASS_CSS } from './glass-theme'
import GlassNav from './_components/GlassNav'
import GlassFooter from './_components/GlassFooter'

/**
 * Type system, matched to the design language:
 *  • Fraunces   — display serif for headlines and big numbers  (--font-fraunces)
 *  • Geist Sans — UI / body                                     (--font-geist-sans)
 *  • Geist Mono — labels, eyebrows, mono figures               (--font-geist-mono)
 * The glass-theme CSS references these variables directly.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Nulvify — Know the day you’re debt-free',
  description:
    'A calm, glass-UI concept for Nulvify: turn your balances into a single, trustworthy debt-free date, then walk toward it one clear step at a time.',
  applicationName: 'Nulvify',
}

export const viewport = {
  themeColor: '#EDE4D2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="gs-root">
          <style>{GLASS_CSS}</style>

          <div className="gs-ambient" aria-hidden="true">
            <div className="gs-orb gs-orb--1" />
            <div className="gs-orb gs-orb--2" />
            <div className="gs-orb gs-orb--3" />
          </div>

          <div className="gs-page">
            <GlassNav />
            <main>{children}</main>
            <GlassFooter />
            <p className="gs-note">
              This is a design concept. Figures shown are illustrative examples, not real accounts.
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
