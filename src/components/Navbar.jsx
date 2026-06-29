import { useState, useEffect, useCallback, memo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

// Memoized Navbar — only re-renders when activeSection or isMenuOpen changes
const Navbar = memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay allows route to settle before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  }, [location.pathname, navigate]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  useEffect(() => {
    // Only observe sections if on the home page
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      if (window.scrollY < 80) setActiveSection('hero');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );

    const sectionIds = ['hero', 'products', 'careers', 'industries', 'services', 'about', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const NAV_LINKS = [
    { id: 'hero', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'careers', label: 'Careers' },
    { id: 'industries', label: 'Industries' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link
        to="/"
        className="navbar__brand"
        onClick={() => scrollToSection('hero')}
        aria-label="TechBrain Networks Aerospace — Home"
      >
        <span className="navbar__brand-icon" aria-hidden="true">🛰</span>
        <div className="navbar__brand-text">
          <span className="navbar__brand-accent">Techbrain Networks</span>
          <span className="navbar__brand-subtext">AEROSPACE</span>
        </div>
      </Link>

      <button
        className={`navbar__hamburger${isMenuOpen ? ' navbar__hamburger--active' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
      >
        <span className="navbar__hamburger-line" aria-hidden="true" />
        <span className="navbar__hamburger-line" aria-hidden="true" />
        <span className="navbar__hamburger-line" aria-hidden="true" />
      </button>

      <ul
        id="navbar-menu"
        className={`navbar__nav${isMenuOpen ? ' navbar__nav--active' : ''}`}
        role="menubar"
      >
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id} className="navbar__nav-item" role="none">
            <button
              className={`navbar__nav-link${activeSection === id ? ' navbar__nav-link--active' : ''}`}
              onClick={() => scrollToSection(id)}
              role="menuitem"
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
