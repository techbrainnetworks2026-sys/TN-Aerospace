import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './ContactPage.css';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <section className="page-hero" style={{ background: 'var(--c-surface)' }}>
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="page-hero-content">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Products</button>
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Get In Touch
          </div>
          <h1>Contact Us</h1>
          <p className="hero-sub" style={{ maxWidth: 700 }}>
            Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements. If you're looking for customized solutions to power up your business, we'll be happy to help out!
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <h3 className="contact-title">India</h3>
              <div className="contact-location">
                <h4>Thanjavur</h4>
                <p>6/12 Papa vaikal Street, Ayyampettai Post<br />Papanasam Taluk<br />Thanjavur 614201, Tamilnadu, India.</p>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="contact-title">United Kingdom</h3>
              <div className="contact-location">
                <h4>London</h4>
                <p>71-75 Shelton Street, Covent Garden,<br />London, WC2H 9JQ, United Kingdom.</p>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="contact-title">Direct Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+918754906714">+91 8754906714</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
