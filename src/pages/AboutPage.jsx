import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './AboutPage.css';

const VISION = `We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.`;

const MISSION = `We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.`;

const PASSION = `Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.`;

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="container about-hero-inner">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            TechBrain Networks — Our Story
          </div>
          <h1>
            Revolutionizing the<br />
            <span className="grad">Future of Technology</span>
          </h1>
          <p className="hero-sub" style={{ maxWidth: 700 }}>
            TechBrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
          </p>

          <div className="about-metrics">
            {[
              { v: '480+', l: 'Innovative Products' },
              { v: '24', l: 'Global Industries' },
              { v: '30+', l: 'Countries by 2027' },
              { v: '2027', l: 'Global Launch' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="metric-val">{v}</div>
                <div className="metric-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">Our Mission</div>
          <h2>480 Products. 24 Industries. One Vision.</h2>
          <p style={{ color: 'var(--c-t2)', fontSize: '1.15rem', lineHeight: 1.9, marginTop: 24 }}>
            We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sec-head">
            <div className="eyebrow">Our Core</div>
            <h2>Our Values</h2>
          </div>
          
          <div className="our-values-grid">
            <div className="our-value-card">
              <div className="our-value-letter">O</div>
              <h3>Vision</h3>
              <p>{VISION}</p>
            </div>
            <div className="our-value-card">
              <div className="our-value-letter">U</div>
              <h3>Mission</h3>
              <p>{MISSION}</p>
            </div>
            <div className="our-value-card">
              <div className="our-value-letter">R</div>
              <h3>Passion</h3>
              <p>{PASSION}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--c-surface)' }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="sec-head">
            <div className="eyebrow">Leadership</div>
            <h2>Meet our Founder</h2>
          </div>

          <div className="founder-card">
            <div className="founder-avatar">
              <div className="founder-avatar-in">R</div>
            </div>
            <div>
              <div className="founder-name">Ramkumar Arunachalam</div>
              <div className="founder-role">Founder of TechBrain Networks</div>
              <p className="founder-bio">
                A visionary technology entrepreneur, Ramkumar founded TechBrain Networks with an audacious goal: to revolutionize the future of technology with 480 innovative products across 24 industries. His leadership combines deep technical expertise with a relentless passion for making advanced innovation accessible globally and creating a global impact on society.
              </p>
              <div className="founder-tags">
                <div className="founder-tag">Visionary</div>
                <div className="founder-tag">Innovator</div>
                <div className="founder-tag">Tech Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="eyebrow">Start Today</div>
          <h2 style={{ marginBottom: 16 }}>Join the TechBrain Revolution</h2>
          <p style={{ color: 'var(--c-t2)', marginBottom: 36, lineHeight: 1.8, fontSize: '1.05rem' }}>
            Explore our full suite of products and discover how TechBrain Networks can power your next innovation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
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
 