import { useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer__section">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            <div className="footer__brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <span className="footer__brand-icon">🛰</span>
              <div className="footer__brand-text">
                <span className="footer__brand-accent">TechBrain Networks</span>
                <span className="footer__brand-subtext">AEROSPACE</span>
              </div>
            </div>
            <div className="footer__division">Aerospace Division</div>
            <p className="footer__desc">
              Mission-critical aerospace software for the next generation of space exploration — engineered for precision, built for the cosmos.
            </p>
            <div className="footer__socials">
              {['𝕏', 'in', '𝔾', '▶'].map((s) => <div key={s} className="footer__social-btn">{s}</div>)}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer__col">
            <div className="footer__col-head">Quick Links</div>
            <ul className="footer__links">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Industries', path: '/industries' },
                { label: 'Services', path: '/services' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.label} className="footer__link-item">
                  <span className="footer__lnk" onClick={() => navigate(l.path)}>{l.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer__col">
            <div className="footer__col-head">Contact Info</div>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span className="footer__contact-text">Thanjavur 614201, Tamilnadu, India</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span className="footer__contact-text">London WC2H 9JQ, United Kingdom</span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+918754906714" className="footer__contact-link">+91 8754906714</a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:contact@techbrainnetworks.com" className="footer__contact-link">contact@techbrainnetworks.com</a>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="footer__col">
            <div className="footer__col-head">Stay Updated</div>
            <p className="footer__newsletter-text">
              Subscribe to our newsletter for the latest aerospace-tech innovations and updates.
            </p>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required className="footer__newsletter-input" />
              <button type="submit" className="footer__newsletter-submit btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__bar">
          <span className="footer__copyright">© 2026 TechBrain Networks Aerospace Division · All Rights Reserved.</span>
          <div className="footer__legal-links" style={{ display: 'flex', gap: 20 }}>
            <span className="footer__lnk" onClick={() => navigate('/privacy')}>Privacy Policy</span>
            <span className="footer__lnk" onClick={() => navigate('/terms')}>Terms and conditions</span>
            <span className="footer__lnk" onClick={() => navigate('/security')}>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
