import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { LIQUID_CSS } from './liquid-theme'
import LiquidNav from './_components/LiquidNav'
import LiquidFooter from './_components/LiquidFooter'
import LiquidFX from './_components/LiquidFX'

/**
 * Type system, matched to the design language:
 *  • Fraunces   — display serif for headlines and big numbers  (--font-fraunces)
 *  • Geist Sans — UI / body                                     (--font-geist-sans)
 *  • Geist Mono — labels, eyebrows, mono figures               (--font-geist-mono)
 * The liquid-theme CSS references these variables directly.
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
    'A calm, liquid-glass concept for Nulvify: turn your balances into a single, trustworthy debt-free date, then walk toward it one clear step at a time.',
  applicationName: 'Nulvify',
}

export const viewport = {
  themeColor: '#EDE4D2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="lg-root">
          <style>{LIQUID_CSS}</style>
          <LiquidFX />

          <div className="lg-ambient" aria-hidden="true">
            <div className="lg-orb lg-orb--1" />
            <div className="lg-orb lg-orb--2" />
            <div className="lg-orb lg-orb--3" />
            <div className="lg-orb lg-orb--4" />
          </div>
          <div className="lg-grain" aria-hidden="true" />

          <div className="lg-page">
            <LiquidNav />
            <main>{children}</main>
            <LiquidFooter />
            <p className="lg-note">
              This is a design concept. Figures shown are illustrative examples, not real accounts.
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
