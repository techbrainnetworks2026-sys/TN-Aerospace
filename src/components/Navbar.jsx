import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-15% 0px -75% 0px',
        threshold: 0,
      }
    );

    const sections = ['hero', 'products', 'careers', 'industries', 'services', 'about', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__brand" onClick={() => scrollToSection('hero')}>
          <span className="navbar__brand-icon">🛰</span>
          <div className="navbar__brand-text">
            <span className="navbar__brand-accent">Techbrain Networks</span>
            <span className="navbar__brand-subtext">AEROSPACE</span>
          </div>
        </Link>

        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        <ul className={`navbar__nav ${isMenuOpen ? 'navbar__nav--active' : ''}`}>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('hero') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('hero')}>Home</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('products') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('products')}>Products</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('careers') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('careers')}>Careers</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('industries') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('industries')}>Industries</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('services') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('services')}>Services</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('about') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('about')}>About Us</span></li>
          <li className="navbar__nav-item"><span className={`navbar__nav-link ${isActive('contact') ? 'navbar__nav-link--active' : ''}`} onClick={() => scrollToSection('contact')}>Contact Us</span></li>
        </ul>
      </nav>
    </>
  );
}
