import { memo } from 'react';
import './Hero.css';

// Hero image path — WebP at 215KB (was 2MB JPG)
// Served from /public so it's immediately available without JS bundle
const HERO_SRC = '/aerospace-background.webp';

const Hero = memo(function Hero({ onWatchClick }) {
  return (
    <section className="hero__section">
      {/* LCP element: eager, high-priority, explicit dimensions prevent CLS */}
      <img
        src={HERO_SRC}
        alt="Aerospace background — starfield with satellite"
        className="hero__bg-img"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        width="1920"
        height="1080"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb-1" aria-hidden="true" />
      <div className="hero__orb hero__orb-2" aria-hidden="true" />

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
              aria-label="Scroll to products section"
            >
              Explore Products ↓
            </button>
            <button
              className="btn btn-ghost"
              onClick={onWatchClick}
              aria-label="Watch product overview slideshow"
            >
              Watch Overview ▶
            </button>
          </div>

          <div className="hero__metrics" role="list" aria-label="Key metrics">
            {[
              { v: '20+', l: 'Software Platforms' },
              { v: '50yr', l: 'Innovation Roadmap' },
              { v: '99.9%', l: 'Uptime SLA' },
              { v: '30+', l: 'Countries by 2027' },
            ].map(({ v, l }) => (
              <div key={l} role="listitem">
                <div className="hero__metric-val" aria-label={`${v} ${l}`}>{v}</div>
                <div className="hero__metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
