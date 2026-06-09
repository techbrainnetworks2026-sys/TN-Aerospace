import { useNavigate } from 'react-router-dom';
import './AboutPage.css';

const VISION = `We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.`;

const MISSION = `We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.`;

const PASSION = `Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.`;

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about__page-wrapper">
      <section className="about__section about__hero">
        <div className="about__hero-grid" />
        <div className="about__orb about__orb-1" />
        <div className="about__orb about__orb-2" />
        <div className="about__container about__hero-inner container">
          <button className="about__back-btn btn btn-ghost" onClick={() => navigate('/')}>← Back to Home</button>
          <div className="about__hero-pill">
            <span className="about__hero-pill-dot" />
            TechBrain Networks — Our Story
          </div>
          <h1 className="about__title">
            Revolutionizing the<br />
            <span className="about__title-grad">Future of Technology</span>
          </h1>
          <p className="about__hero-sub" style={{ maxWidth: 700 }}>
            TechBrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
          </p>

          <div className="about__metrics">
            {[
              { v: '480+', l: 'Innovative Products' },
              { v: '24', l: 'Global Industries' },
              { v: '30+', l: 'Countries by 2027' },
              { v: '2027', l: 'Global Launch' },
            ].map(({ v, l }) => (
              <div key={l} className="about__metric-item">
                <div className="about__metric-val">{v}</div>
                <div className="about__metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__section" style={{ background: 'var(--c-surface)' }}>
        <div className="about__container container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="about__eyebrow eyebrow">Our Mission</div>
          <h2 className="about__sec-title">480 Products. 24 Industries. One Vision.</h2>
          <p className="about__sec-desc" style={{ color: 'var(--c-t2)', fontSize: '1.15rem', lineHeight: 1.9, marginTop: 24 }}>
            We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
          </p>
        </div>
      </section>

      <section className="about__section" style={{ background: 'var(--c-surface)' }}>
        <div className="about__container container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about__sec-head">
            <div className="about__eyebrow eyebrow">Our Core</div>
            <h2 className="about__sec-title">Our Values</h2>
          </div>
          
          <div className="about__our-values-grid">
            <div className="about__our-value-card">
              <div className="about__our-value-letter">O</div>
              <h3 className="about__our-value-title">Vision</h3>
              <p className="about__our-value-text">{VISION}</p>
            </div>
            <div className="about__our-value-card">
              <div className="about__our-value-letter">U</div>
              <h3 className="about__our-value-title">Mission</h3>
              <p className="about__our-value-text">{MISSION}</p>
            </div>
            <div className="about__our-value-card">
              <div className="about__our-value-letter">R</div>
              <h3 className="about__our-value-title">Passion</h3>
              <p className="about__our-value-text">{PASSION}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__section" style={{ background: 'var(--c-surface)' }}>
        <div className="about__container container" style={{ maxWidth: 960 }}>
          <div className="about__sec-head">
            <div className="about__eyebrow eyebrow">Leadership</div>
            <h2 className="about__sec-title">Meet our Founder</h2>
          </div>

          <div className="about__founder-card">
            <div className="about__founder-avatar">
              <div className="about__founder-avatar-in">R</div>
            </div>
            <div className="about__founder-info">
              <div className="about__founder-name">Ramkumar Arunachalam</div>
              <div className="about__founder-role">Founder of TechBrain Networks</div>
              <p className="about__founder-bio">
                A visionary technology entrepreneur, Ramkumar founded TechBrain Networks with an audacious goal: to revolutionize the future of technology with 480 innovative products across 24 industries. His leadership combines deep technical expertise with a relentless passion for making advanced innovation accessible globally and creating a global impact on society.
              </p>
              <div className="about__founder-tags">
                <div className="about__founder-tag">Visionary</div>
                <div className="about__founder-tag">Innovator</div>
                <div className="about__founder-tag">Tech Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about__cta-band">
        <div className="about__container container" style={{ maxWidth: 640 }}>
          <div className="about__eyebrow eyebrow">Start Today</div>
          <h2 className="about__sec-title" style={{ marginBottom: 16 }}>Join the TechBrain Revolution</h2>
          <p className="about__sec-desc" style={{ color: 'var(--c-t2)', marginBottom: 36, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Explore our full suite of products and discover how TechBrain Networks can power your next innovation.
          </p>
          <div className="about__cta-actions" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>
              Explore Products →
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}