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
      <div id="hero" className="home__hero-section">
        <Hero onWatchClick={() => setShowVideo(true)} />
      </div>
      {showVideo && <ProductOverviewModal onClose={() => setShowVideo(false)} />}

      <section className="home__section home__products-bg" id="products">
        <div className="home__container container">
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Our Portfolio</div>
            <h2 className="home__sec-title">20 Mission-Critical Platforms</h2>
            <p className="home__sec-desc">
              From satellite operations to deep space exploration, our products power the most ambitious missions in aerospace.
            </p>
          </div>

          <div className="home__search-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              className="home__search-box"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="home__tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`home__tab ${activeCategory === cat ? 'home__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="home__no-results" style={{ textAlign: 'center', color: 'var(--c-t2)', padding: '60px 0', fontSize: '1.1rem' }}>
              No products found matching "{search}".
            </div>
          ) : (
            <div className="home__grid-products">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="home__section home__careers-bg" id="careers">
        <div className="home__container container">
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Join Our Team</div>
            <h2 className="home__sec-title">Career Opportunities</h2>
            <p className="home__sec-desc">
              Explore exciting career opportunities and find the perfect role for your skills in aerospace technology.
            </p>
          </div>

          <div className="home__careers-grid">
            {careers.map((career) => (
              <div key={career.id} className="home__career-card">
                <div className="home__career-title-section">
                  <div className="home__title-badge">💼</div>
                  <h3 className="home__career-title">{career.title}</h3>
                </div>
                <p className="home__skills-label">Required Skills</p>
                <div className="home__skills-list">
                  {career.skills.map((skill, idx) => (
                    <span key={idx} className="home__skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="home__section home__industries-bg" id="industries">
        <div className="home__container container">
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Our Reach</div>
            <h2 className="home__sec-title">Industries We Serve</h2>
            <p className="home__sec-desc">
              TechBrain Networks serves a diverse range of industries with innovative aerospace technology solutions.
            </p>
          </div>

          <div className="home__industries-grid">
            {industries.map((industry) => (
              <div key={industry.id} className="home__industry-card">
                <div className="home__industry-icon">{industry.icon}</div>
                <h3 className="home__industry-title">{industry.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="home__section home__services-bg" id="services">
        <div className="home__container container">
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Our Expertise</div>
            <h2 className="home__sec-title">Services</h2>
            <p className="home__sec-desc">
              We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
            </p>
          </div>

          <div className="home__services-grid">
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
              <div key={service.title} className="home__service-card">
                <div className="home__service-icon">{service.icon}</div>
                <h3 className="home__service-title">{service.title}</h3>
                <p className="home__service-desc">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section className="home__section home__about-section" style={{ background: 'var(--c-surface)' }} id="about">
        <div className="home__container container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Our Core</div>
            <h2 className="home__sec-title">About TechBrain Networks</h2>
            <p className="home__about-desc" style={{ marginTop: 24, fontSize: '1.05rem' }}>
              TechBrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing. We are revolutionizing the future of technology with 480 innovative products spanning 24 industries.
            </p>
          </div>

          <div className="home__our-values-grid">
            <div className="home__our-value-card">
              <div className="home__our-value-letter">O</div>
              <h3 className="home__our-value-title">Vision</h3>
              <p className="home__our-value-text">We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
            </div>
            <div className="home__our-value-card">
              <div className="home__our-value-letter">U</div>
              <h3 className="home__our-value-title">Mission</h3>
              <p className="home__our-value-text">We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
            </div>
            <div className="home__our-value-card">
              <div className="home__our-value-letter">R</div>
              <h3 className="home__our-value-title">Passion</h3>
              <p className="home__our-value-text">Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
            </div>
          </div>

          <div className="home__founder-section" style={{ marginTop: 60, textAlign: 'center' }}>
            <h3 className="home__founder-head" style={{ fontSize: '1.5rem', marginBottom: 24, color: 'var(--c-t1)' }}>Our Founder</h3>
            <div className="home__founder-card">
              <div className="home__founder-avatar">
                <div className="home__founder-avatar-in">R</div>
              </div>
              <div className="home__founder-info">
                <div className="home__founder-name">Ramkumar Arunachalam</div>
                <div className="home__founder-role">Founder of TechBrain Networks</div>
                <p className="home__founder-bio">
                  A visionary technology entrepreneur, Ramkumar founded TechBrain Networks with an audacious goal: to revolutionize the future of technology with 480 innovative products across 24 industries. His leadership combines deep technical expertise with a relentless passion for making advanced innovation accessible globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="home__section" id="contact" style={{ padding: '80px 20px', textAlign: 'center', background: 'var(--c-surface)' }}>
        <div className="home__container container">
          <div className="home__sec-head">
            <div className="home__eyebrow eyebrow">Get In Touch</div>
            <h2 className="home__sec-title">Contact Us</h2>
            <p className="home__sec-desc" style={{ maxWidth: '600px', margin: '20px auto 30px' }}>
              Ready to explore our products or have a question? Reach out to our global team today.
            </p>
            <a href="/contact" className="home__tab home__tab--active" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Visit Contact Page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
