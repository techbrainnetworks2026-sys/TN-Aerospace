import aerospace from '../../src/assets/aerospace-background.jpg'
import './Hero.css';

export default function Hero({ onWatchClick }) {
  return (
    <section className="hero__section">
      <img
          src={aerospace}
          alt="Aerospace background"
          className="hero__bg-img"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      <div className="hero__overlay" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb-1" />
      <div className="hero__orb hero__orb-2" />

      <div className="container">
        <div className="hero__inner">
          

          <h1>
            Engineering the
            <span className="hero__grad-color"> Future of Space</span>
          </h1>

          <p className="hero__sub">
            TechBrain Aerospace delivers 20 mission-critical software platforms spanning
            satellite operations, deep space exploration, and planetary science — built
            by engineers, for the cosmos.
          </p>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products ↓
            </button>
            <button className="btn btn-ghost" onClick={onWatchClick}>Watch Overview ▶</button>
          </div>

          <div className="hero__metrics">
            {[
              { v: '20+', l: 'Software Platforms' },
              { v: '50yr', l: 'Innovation Roadmap' },
              { v: '99.9%', l: 'Uptime SLA' },
              { v: '30+', l: 'Countries by 2027' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="hero__metric-val">{v}</div>
                <div className="hero__metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
