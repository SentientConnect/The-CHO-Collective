const signupUrl =
  process.env.NEXT_PUBLIC_HMM_SIGNUP_URL ||
  "https://www.skool.com/the-cho-collective-8979/about"

function SignupButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      className={`button ${className}`.trim()}
      href={signupUrl}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="The CHO Collective home">
            <span className="brand-symbol">CHO</span>
            <span className="brand-name">The CHO Collective</span>
          </a>
          <SignupButton label="Get the Message" className="button-small" />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A weekly message from Edwin Edebiri</p>
            <h1>Start Monday with clarity, energy, and purpose.</h1>
            <p className="hero-lead">
              The Happy Monday Message is a simple weekly reset designed to help you
              strengthen your mindset, lead with greater intention, and begin the week
              focused on what matters most.
            </p>
            <div className="hero-actions">
              <SignupButton label="Sign Up for Happy Monday Message" />
              <p className="microcopy">Presented by The CHO Collective</p>
            </div>
          </div>

          <div className="brand-visual video-visual">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/video/cho-intro-poster.jpg"
              aria-label="An introduction to the Happy Monday Message by Edwin Edebiri"
            >
              <source src="/video/cho-intro.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </section>

      <section className="value-section" aria-labelledby="what-you-get">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">One message. One meaningful shift.</p>
            <h2 id="what-you-get">A better way to begin the week.</h2>
            <p>
              Each Happy Monday Message gives you a focused idea you can carry into
              your work, relationships, leadership, and personal growth.
            </p>
          </div>

          <div className="value-grid">
            <article className="value-card">
              <span className="card-number">01</span>
              <h3>Reset your mindset</h3>
              <p>Step out of Monday pressure and reconnect with a more useful perspective.</p>
            </article>
            <article className="value-card">
              <span className="card-number">02</span>
              <h3>Lead with intention</h3>
              <p>Bring more optimism, clarity, and purpose into the way you influence others.</p>
            </article>
            <article className="value-card">
              <span className="card-number">03</span>
              <h3>Take one practical action</h3>
              <p>Turn encouragement into a simple step that improves the week ahead.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Hosted by Edwin Edebiri</p>
            <h2>Happiness is more than a feeling. It is a leadership advantage.</h2>
          </div>
          <div className="about-copy">
            <p>
              Edwin Edebiri is a Global Chief Happiness Officer, TEDx speaker, author,
              and business leader who helps people and organizations use happiness to
              build stronger relationships, healthier cultures, and sustainable results.
            </p>
            <p>
              Happy Monday Message brings that work into a short, accessible weekly
              format through The CHO Collective.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow light">Your next Monday can start differently.</p>
            <h2>Join The CHO Collective and receive the Happy Monday Message.</h2>
          </div>
          <SignupButton label="Sign Up Now" className="button-light" />
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="footer-primary">
            <p>© {new Date().getFullYear()} The CHO Collective</p>
            <p>Happy Monday Message with Edwin Edebiri</p>
          </div>
          <p className="sentient-credit">
            Generated by SentientOS™ through Sentient Connect™ ·{" "}
            <a href="https://sentientconnect.io" target="_blank" rel="noreferrer">
              sentientconnect.io
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
