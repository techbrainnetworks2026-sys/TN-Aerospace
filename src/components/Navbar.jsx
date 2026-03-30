import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = (p) => location.pathname === p;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🛰</span>
        <span><span className="brand-accent">TechBrain Networks</span> Aerospace</span>
      </Link>

      <ul className="navbar-nav">
        <li><span className={`nav-link ${active('/') ? 'active' : ''}`} onClick={() => navigate('/')}>Products</span></li>
        <li><span className={`nav-link ${active('/services') ? 'active' : ''}`} onClick={() => navigate('/services')}>Services</span></li>
        <li><span className={`nav-link ${active('/about') ? 'active' : ''}`} onClick={() => navigate('/about')}>About Us</span></li>
        <li><span className={`nav-link ${active('/contact') ? 'active' : ''}`} onClick={() => navigate('/contact')}>Contact Us</span></li>
      </ul>
    </nav>
  );
}
