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
      <section className="gs-hero" style={{ paddingBottom: 'clamp(32px, 5vh, 56px)' }}>
        <div className="gs-container">
          <div className="gs-shead" style={{ maxWidth: 720 }}>
            <span className="gs-eyebrow">Our story</span>
            <h1 className="gs-display" style={{ fontSize: 'clamp(38px, 5.4vw, 66px)' }}>
              We built the tool<br />we wished we&rsquo;d had.
            </h1>
            <p className="gs-lede">
              Nulvify started with a spreadsheet, a stack of statements, and a simple question:
              <em> when, exactly, does this end?</em>
            </p>
          </div>
        </div>
      </section>

      <section className="gs-section" style={{ paddingTop: 0 }}>
        <div className="gs-container" style={{ maxWidth: 820 }}>
          <div className="gs-card gs-glass" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
            <p className="gs-body" style={{ fontSize: 17 }}>
              Every calculator we tried gave us a confident straight line and a wildly optimistic date.
              None of them knew that some months are lean, that a car breaks, that a good freelance
              month can change everything. So the number never felt real &mdash; and a number you don&rsquo;t
              believe can&rsquo;t motivate you.
            </p>
            <p className="gs-body" style={{ fontSize: 17, marginTop: 18 }}>
              We rebuilt it from the other direction: model the wobble first, then find the month that
              survives a thousand different futures. The result is a date you can actually plan around,
              wrapped in an interface that feels less like a bank and more like a deep breath.
            </p>
          </div>
        </div>
      </section>

      <section className="gs-section" style={{ paddingTop: 0 }}>
        <div className="gs-container">
          <div className="gs-shead">
            <span className="gs-eyebrow">What we believe</span>
            <h2 className="gs-h1">Four rules we don&rsquo;t bend.</h2>
          </div>
          <div className="gs-grid gs-grid--2">
            {VALUES.map(([t, b]) => (
              <div className="gs-card gs-glass gs-glass--hover" key={t}>
                <h3 className="gs-h3">{t}</h3>
                <p className="gs-body" style={{ marginTop: 10 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gs-section" style={{ paddingTop: 0 }}>
        <div className="gs-container">
          <div className="gs-shead">
            <span className="gs-eyebrow">Who&rsquo;s building it</span>
            <h2 className="gs-h1">A small team, one obsession.</h2>
          </div>
          <div className="gs-grid gs-grid--3">
            {TEAM.map(([av, name, role]) => (
              <div className="gs-card gs-glass gs-glass--hover" key={name} style={{ textAlign: 'center' }}>
                <div className="gs-quote-av" style={{ width: 56, height: 56, fontSize: 18, margin: '0 auto 14px' }}>{av.slice(0, 2)}</div>
                <div className="gs-quote-name" style={{ fontSize: 16 }}>{name}</div>
                <div className="gs-quote-role">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gs-section" style={{ paddingTop: 0 }}>
        <div className="gs-container">
          <div className="gs-cta-band gs-glass">
            <span className="gs-eyebrow">Come find your date</span>
            <h2 className="gs-h1">The end of your debt has a month.</h2>
            <p className="gs-lede" style={{ maxWidth: '42ch', marginInline: 'auto' }}>Let&rsquo;s go find out which one it is.</p>
            <div className="gs-hero-btns">
              <Link href="/signup" className="gs-btn gs-btn--primary gs-btn--lg">Get my debt-free date</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
