import aerospace from '../../src/assets/aerospace-background.jpg'
import './Hero.css';

export default function Hero({ onWatchClick }) {
  return (
    <section className="hero">
      <img src={aerospace} alt=" background" className="hero-bg-img" />
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        <div className="hero-inner">
          

          <h1>
            Engineering the
            <span className="grad-color"> Future of Space</span>
          </h1>

          <p className="hero-sub">
            TechBrain Aerospace delivers 20 mission-critical software platforms spanning
            satellite operations, deep space exploration, and planetary science — built
            by engineers, for the cosmos.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products ↓
            </button>
            <button className="btn btn-ghost" onClick={onWatchClick}>Watch Overview ▶</button>
          </div>

          <div className="hero-metrics">
            {[
              { v: '20+', l: 'Software Platforms' },
              { v: '50yr', l: 'Innovation Roadmap' },
              { v: '99.9%', l: 'Uptime SLA' },
              { v: '30+', l: 'Countries by 2027' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="metric-val">{v}</div>
                <div className="metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
