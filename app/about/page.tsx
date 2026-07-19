import Link from 'next/link'

const VALUES: [string, string][] = [
  ['Honesty over hype', 'We show the median, not the miracle. A date you can trust beats a date that flatters you.'],
  ['Calm by design', 'Money is stressful enough. Every screen is built to lower your heart rate, not raise it.'],
  ['Your data is yours', 'We sell software, never your numbers. Privacy is the product, not the price.'],
  ['Progress you can feel', 'Small, visible wins compound. We make the next right step obvious every single time.'],
]

const TEAM: [string, string, string][] = [
  ['AR', 'Ada R.', 'Founder & product'],
  ['JL', 'Jonah L.', 'Modeling & data'],
  ['S**', 'Sana M.', 'Design & brand'],
]

export default function GlassAbout() {
  return (
    <>
      <section className="lg-hero" style={{ paddingBottom: 'clamp(32px, 5vh, 56px)' }}>
        <div className="lg-container">
          <div className="lg-shead" style={{ maxWidth: 720 }}>
            <span className="lg-eyebrow">Our story</span>
            <h1 className="lg-display" style={{ fontSize: 'clamp(38px, 5.4vw, 66px)' }}>
              We built the tool<br />we wished we&rsquo;d had.
            </h1>
            <p className="lg-lede">
              Nulvify started with a spreadsheet, a stack of statements, and a simple question:
              <em> when, exactly, does this end?</em>
            </p>
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container" style={{ maxWidth: 820 }}>
          <div className="lg-card lg-glass" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
            <p className="lg-body" style={{ fontSize: 17 }}>
              Every calculator we tried gave us a confident straight line and a wildly optimistic date.
              None of them knew that some months are lean, that a car breaks, that a good freelance
              month can change everything. So the number never felt real &mdash; and a number you don&rsquo;t
              believe can&rsquo;t motivate you.
            </p>
            <p className="lg-body" style={{ fontSize: 17, marginTop: 18 }}>
              We rebuilt it from the other direction: model the wobble first, then find the month that
              survives a thousand different futures. The result is a date you can actually plan around,
              wrapped in an interface that feels less like a bank and more like a deep breath.
            </p>
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">What we believe</span>
            <h2 className="lg-h1">Four rules we don&rsquo;t bend.</h2>
          </div>
          <div className="lg-grid lg-grid--2">
            {VALUES.map(([t, b]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={t}>
                <h3 className="lg-h3">{t}</h3>
                <p className="lg-body" style={{ marginTop: 10 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container">
          <div className="lg-shead">
            <span className="lg-eyebrow">Who&rsquo;s building it</span>
            <h2 className="lg-h1">A small team, one obsession.</h2>
          </div>
          <div className="lg-grid lg-grid--3">
            {TEAM.map(([av, name, role]) => (
              <div className="lg-card lg-glass lg-glass--hover" key={name} style={{ textAlign: 'center' }}>
                <div className="lg-quote-av" style={{ width: 56, height: 56, fontSize: 18, margin: '0 auto 14px' }}>{av.slice(0, 2)}</div>
                <div className="lg-quote-name" style={{ fontSize: 16 }}>{name}</div>
                <div className="lg-quote-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg-section" style={{ paddingTop: 0 }}>
        <div className="lg-container">
          <div className="lg-cta-band lg-glass lg-glass--refract">
            <span className="lg-eyebrow">Come find your date</span>
            <h2 className="lg-h1">The end of your debt has a month.</h2>
            <p className="lg-lede" style={{ maxWidth: '42ch', marginInline: 'auto' }}>Let&rsquo;s go find out which one it is.</p>
            <div className="lg-hero-btns">
              <Link href="/signup" className="lg-btn lg-btn--primary lg-btn--lg">Get my debt-free date</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
