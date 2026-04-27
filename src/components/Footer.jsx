import { useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <span className="brand-icon">🛰</span>
              <div className="brand-text">
                <span className="brand-accent">TechBrain Networks</span>
                <span className="brand-subtext">AEROSPACE</span>
              </div>
            </div>
            <div className="footer-division">Aerospace Division</div>
            <p className="footer-desc">
              Mission-critical aerospace software for the next generation of space exploration — engineered for precision, built for the cosmos.
            </p>
            <div className="footer-socials">
              {['𝕏', 'in', '𝔾', '▶'].map((s) => <div key={s} className="social-btn">{s}</div>)}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <div className="footer-col-head">Quick Links</div>
            <ul className="footer-links">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Industries', path: '/industries' },
                { label: 'Services', path: '/services' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <span className="footer-lnk" onClick={() => navigate(l.path)}>{l.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <div className="footer-col-head">Contact Info</div>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>Thanjavur 614201, Tamilnadu, India</span>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>London WC2H 9JQ, United Kingdom</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+918754906714">+91 8754906714</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div>
            <div className="footer-col-head">Stay Updated</div>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for the latest aerospace-tech innovations and updates.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bar">
          <span>© 2026 TechBrain Networks Aerospace Division · All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <span className="footer-lnk" onClick={() => navigate('/privacy')}>Privacy Policy</span>
            <span className="footer-lnk" onClick={() => navigate('/terms')}>Terms and conditions</span>
            <span className="footer-lnk" onClick={() => navigate('/security')}>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
