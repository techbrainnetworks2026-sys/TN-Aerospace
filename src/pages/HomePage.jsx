import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductOverviewModal from '../components/ProductOverviewModal';
import { products, categories } from '../data/products';
import { careers } from '../data/careers';
import { industries } from '../data/industries';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory;
      const searchMatch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <div id="hero">
        <Hero onWatchClick={() => setShowVideo(true)} />
      </div>
      {showVideo && <ProductOverviewModal onClose={() => setShowVideo(false)} />}

      <section className="section products-bg" id="products">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Our Portfolio</div>
            <h2>20 Mission-Critical Platforms</h2>
            <p>
              From satellite operations to deep space exploration, our products power the most ambitious missions in aerospace.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              className="search-box"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--c-t2)', padding: '60px 0', fontSize: '1.1rem' }}>
              No products found matching "{search}".
            </div>
          ) : (
            <div className="grid-products">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section careers-bg" id="careers">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Join Our Team</div>
            <h2>Career Opportunities</h2>
            <p>
              Explore exciting career opportunities and find the perfect role for your skills in aerospace technology.
            </p>
          </div>

          <div className="careers-grid">
            {careers.map((career) => (
              <div key={career.id} className="career-card">
                <div className="career-title-section">
                  <div className="title-badge">💼</div>
                  <h3>{career.title}</h3>
                </div>
                <p className="skills-label">Required Skills</p>
                <div className="skills-list">
                  {career.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section industries-bg" id="industries">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Our Reach</div>
            <h2>Industries We Serve</h2>
            <p>
              TechBrain Networks serves a diverse range of industries with innovative aerospace technology solutions.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <div key={industry.id} className="industry-card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="section services-bg" id="services">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Our Expertise</div>
            <h2>Services</h2>
            <p>
              We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                title: 'Software Development',
                description: 'Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions.',
                icon: '💻'
              },
              {
                title: 'Hardware Engineering',
                description: 'Expert hardware engineering services designed to bring innovative and reliable products to market.',
                icon: '⚙️'
              },
              {
                title: 'Product Design',
                description: 'Innovative product design services, transforming ideas into market-ready solutions.',
                icon: '🎨'
              },
              {
                title: 'Research & Development',
                description: 'Comprehensive R&D services, driving innovation and technological advancements for businesses.',
                icon: '🔬'
              }
            ].map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section className="section" style={{ background: 'var(--c-surface)' }} id="about">
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sec-head">
            <div className="eyebrow">Our Core</div>
            <h2>About TechBrain Networks</h2>
            <p style={{ marginTop: 24, fontSize: '1.05rem' }}>
              TechBrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing. We are revolutionizing the future of technology with 480 innovative products spanning 24 industries.
            </p>
          </div>

          <div className="our-values-grid">
            <div className="our-value-card">
              <div className="our-value-letter">O</div>
              <h3>Vision</h3>
              <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
            </div>
            <div className="our-value-card">
              <div className="our-value-letter">U</div>
              <h3>Mission</h3>
              <p>We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
            </div>
            <div className="our-value-card">
              <div className="our-value-letter">R</div>
              <h3>Passion</h3>
              <p>Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
            </div>
          </div>

          <div style={{ marginTop: 60, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: 24, color: 'var(--c-t1)' }}>Our Founder</h3>
            <div className="founder-card">
              <div className="founder-avatar">
                <div className="founder-avatar-in">R</div>
              </div>
              <div>
                <div className="founder-name">Ramkumar Arunachalam</div>
                <div className="founder-role">Founder of TechBrain Networks</div>
                <p className="founder-bio">
                  A visionary technology entrepreneur, Ramkumar founded TechBrain Networks with an audacious goal: to revolutionize the future of technology with 480 innovative products across 24 industries. His leadership combines deep technical expertise with a relentless passion for making advanced innovation accessible globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-bg" id="contact">
        <div className="container">
          <div className="sec-head">
            <div className="eyebrow">Get In Touch</div>
            <h2 style={{ color: 'white' }}>Contact Us</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements.
            </p>
          </div>

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
    </>
  );
}
