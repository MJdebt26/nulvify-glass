'use client'

import { useEffect } from 'react'

/**
 * LiquidFX — the interactive/optical engine for the liquid-glass site.
 *
 *  1. Renders the hidden SVG <filter> defs used by the CSS:
 *       #lg-refraction — a gentle organic ripple (feTurbulence → feDisplacementMap)
 *                        for nav + big "refract" surfaces. Size-independent, cheap.
 *       #lg-lens       — the hero showcase: an edge-lensing displacement map
 *                        (generated to the card's size) + 3-pass chromatic
 *                        aberration. This is the real Apple "bend the light" look.
 *  2. Detects Chromium (the only engine that runs SVG filters in backdrop-filter)
 *     and adds `.lg-refract-on` so the CSS opts into real refraction; everyone
 *     else keeps the rich blur fallback.
 *  3. Cursor-follow specular highlight on every .lg-glass (via --mx/--my).
 *  4. Subtle 3D tilt on the hero card ([data-lg-tilt]).
 *  Honors prefers-reduced-motion and coarse pointers.
 */
export default function LiquidFX() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.lg-root')
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    // ── 1. Chromium detection → enable real refraction ─────────────────────
    const ua = navigator.userAgent
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua)
    const isFirefox = /firefox/i.test(ua)
    const isChromium = !!(window as unknown as { chrome?: unknown }).chrome && !isSafari && !isFirefox
    if (isChromium) root.classList.add('lg-refract-on')

    // ── 2. Build the hero edge-lens displacement map, sized to the card ────
    const heroCard = document.querySelector<HTMLElement>('[data-lg-tilt]')
    const lensMap = document.getElementById('lg-lens-map')
    const lensFilter = document.getElementById('lg-lens')

    function makeLensMap(w: number, h: number, edge: number) {
      const c = document.createElement('canvas')
      c.width = w; c.height = h
      const ctx = c.getContext('2d')
      if (!ctx) return ''
      const img = ctx.createImageData(w, h)
      const d = img.data
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const dl = Math.max(0, edge - x)
          const dr = Math.max(0, x - (w - 1 - edge))
          const dt = Math.max(0, edge - y)
          const db = Math.max(0, y - (h - 1 - edge))
          // ease the rim ramp for a soft squircle-like bend
          const nx = Math.sign(dr - dl) * Math.pow(Math.min(1, Math.abs(dr - dl) / edge), 1.4)
          const ny = Math.sign(db - dt) * Math.pow(Math.min(1, Math.abs(db - dt) / edge), 1.4)
          const i = (y * w + x) * 4
          d[i] = 128 + nx * 127
          d[i + 1] = 128 + ny * 127
          d[i + 2] = 128
          d[i + 3] = 255
        }
      }
      ctx.putImageData(img, 0, 0)
      return c.toDataURL()
    }

    function syncLens() {
      if (!heroCard || !lensMap || !lensFilter || !isChromium) return
      const r = heroCard.getBoundingClientRect()
      const w = Math.max(2, Math.round(r.width))
      const h = Math.max(2, Math.round(r.height))
      const edge = Math.round(Math.min(w, h) * 0.42) // how far the lens reaches inward
      lensMap.setAttribute('href', makeLensMap(w, h, edge))
      lensMap.setAttribute('width', String(w))
      lensMap.setAttribute('height', String(h))
      lensFilter.setAttribute('width', String(w))
      lensFilter.setAttribute('height', String(h))
    }
    syncLens()
    const ro = heroCard && 'ResizeObserver' in window ? new ResizeObserver(syncLens) : null
    if (ro && heroCard) ro.observe(heroCard)

    // ── 3 + 4. Pointer: cursor sheen on any glass + tilt on the hero ───────
    let raf = 0
    let current: HTMLElement | null = null

    function onMove(e: PointerEvent) {
      if (!finePointer) return
      const target = e.target as HTMLElement | null
      const glass = target?.closest<HTMLElement>('.lg-glass') ?? null
      if (glass !== current && current) { current.style.removeProperty('--mx'); current.style.removeProperty('--my') }
      current = glass
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (glass && !reduceMotion) {
          const r = glass.getBoundingClientRect()
          glass.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
          glass.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
        }
        if (heroCard && !reduceMotion) {
          const r = heroCard.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          const inside = px > -0.6 && px < 0.6 && py > -0.6 && py < 0.6
          if (inside) {
            heroCard.style.transform = `perspective(1100px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-2px)`
          } else {
            heroCard.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)'
          }
        }
      })
    }
    function onLeaveHero() { if (heroCard) heroCard.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)' }

    window.addEventListener('pointermove', onMove, { passive: true })
    heroCard?.addEventListener('pointerleave', onLeaveHero)

    return () => {
      window.removeEventListener('pointermove', onMove)
      heroCard?.removeEventListener('pointerleave', onLeaveHero)
      if (raf) cancelAnimationFrame(raf)
      if (ro) ro.disconnect()
    }
  }, [])

  return (
    <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
      <defs>
        {/* gentle organic ripple for nav + refract surfaces */}
        <filter id="lg-refraction" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves={2} seed={7} result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="26" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* hero edge-lens + chromatic aberration; map href/size set by JS */}
        <filter id="lg-lens" x="0" y="0" width="600" height="400" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feImage id="lg-lens-map" x="0" y="0" preserveAspectRatio="none" result="map" />
          <feGaussianBlur in="map" stdDeviation="2" result="smap" />
          <feDisplacementMap in="SourceGraphic" in2="smap" scale="54" xChannelSelector="R" yChannelSelector="G" result="dR" />
          <feColorMatrix in="dR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="R" />
          <feDisplacementMap in="SourceGraphic" in2="smap" scale="47" xChannelSelector="R" yChannelSelector="G" result="dG" />
          <feColorMatrix in="dG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="G" />
          <feDisplacementMap in="SourceGraphic" in2="smap" scale="40" xChannelSelector="R" yChannelSelector="G" result="dB" />
          <feColorMatrix in="dB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="B" />
          <feBlend in="R" in2="G" mode="screen" result="RG" />
          <feBlend in="RG" in2="B" mode="screen" />
        </filter>
      </defs>
    </svg>
  )
}
