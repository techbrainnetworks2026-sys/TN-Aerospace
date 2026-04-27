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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['hero', 'products', 'careers', 'industries', 'services', 'about', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand" onClick={() => scrollToSection('hero')}>
          <span className="brand-icon">🛰</span>
          <div className="brand-text">
            <span className="brand-accent">TechBrain Networks</span>
            <span className="brand-subtext">AEROSPACE</span>
          </div>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li><span className={`nav-link ${isActive('hero') ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>Home</span></li>
          <li><span className={`nav-link ${isActive('products') ? 'active' : ''}`} onClick={() => scrollToSection('products')}>Products</span></li>
          <li><span className={`nav-link ${isActive('careers') ? 'active' : ''}`} onClick={() => scrollToSection('careers')}>Careers</span></li>
          <li><span className={`nav-link ${isActive('industries') ? 'active' : ''}`} onClick={() => scrollToSection('industries')}>Industries</span></li>
          <li><span className={`nav-link ${isActive('services') ? 'active' : ''}`} onClick={() => scrollToSection('services')}>Services</span></li>
          <li><span className={`nav-link ${isActive('about') ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About Us</span></li>
          <li><span className={`nav-link ${isActive('contact') ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact Us</span></li>
        </ul>
      </nav>
    </>
  );
}
