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

          <style>{`
            .careers-bg {
              background: linear-gradient(135deg, #0a1428 0%, #1a2332 50%, #0d47a1 100%);
              padding: 80px 20px;
              min-height: 100vh;
            }

            .careers-bg .sec-head .eyebrow,
            .careers-bg .sec-head h2,
            .careers-bg .sec-head p {
              color: white;
            }

            .careers-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
              gap: 24px;
              margin-top: 50px;
            }

            .career-card {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border: 1px solid rgba(13, 71, 161, 0.1);
              border-radius: 16px;
              padding: 28px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              backdrop-filter: blur(10px);
            }

            .career-card:hover {
              border-color: rgba(13, 71, 161, 0.3);
              transform: translateY(-8px);
              box-shadow: 0 12px 40px rgba(13, 71, 161, 0.2);
            }

            .career-title-section {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 18px;
            }

            .title-badge {
              font-size: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
              background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
              border-radius: 12px;
              flex-shrink: 0;
            }

            .career-title-section h3 {
              margin: 0;
              font-size: 19px;
              font-weight: 700;
              background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: #0d47a1;
            }

            .skills-label {
              margin: 20px 0 12px 0;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              color: #1565c0;
            }

            .skills-list {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .skill-badge {
              display: inline-block;
              background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
              color: #0d47a1;
              padding: 7px 14px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 600;
              border: 1px solid rgba(13, 71, 161, 0.2);
              transition: all 0.2s ease;
            }

            .skill-badge:hover {
              background: linear-gradient(135deg, #1565c0 0%, #4a148c 100%);
              color: white;
              border-color: transparent;
            }

            @media (max-width: 768px) {
              .careers-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
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

          <style>{`
            .industries-bg {
              background: linear-gradient(135deg, #0a1428 0%, #1a2332 50%, #0d47a1 100%);
              padding: 80px 20px;
              color: white;
              min-height: 100vh;
            }

            .industries-bg .sec-head h2,
            .industries-bg .sec-head p {
              color: white;
            }

            .industries-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              gap: 24px;
              margin-top: 50px;
            }

            .industry-card {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border: 1px solid rgba(13, 71, 161, 0.1);
              border-radius: 16px;
              padding: 22px;
              text-align: center;
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              backdrop-filter: blur(10px);
            }

            .industry-card:hover {
              border-color: rgba(13, 71, 161, 0.3);
              transform: translateY(-8px);
              box-shadow: 0 12px 40px rgba(13, 71, 161, 0.2);
            }

            .industry-icon {
              font-size: 48px;
              margin-bottom: 12px;
              display: inline-block;
            }

            .industry-card h3 {
              margin: 0;
              font-size: 16px;
              font-weight: 700;
              background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            @media (max-width: 768px) {
              .industries-grid {
                grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
              }
            }
          `}</style>
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

          <style>{`
            .services-bg {
              background: linear-gradient(135deg, #0a1428 0%, #1a2332 50%, #0d47a1 100%);
              padding: 80px 20px;
              min-height: 100vh;
            }

            .services-bg .sec-head .eyebrow,
            .services-bg .sec-head h2,
            .services-bg .sec-head p {
              color: white;
            }

            .services-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              gap: 24px;
              margin-top: 50px;
              justify-content: center;
            }

            .service-card {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border: 1px solid rgba(13, 71, 161, 0.1);
              border-radius: 16px;
              padding: 32px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              backdrop-filter: blur(10px);
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .service-card:hover {
              border-color: rgba(13, 71, 161, 0.3);
              transform: translateY(-8px);
              box-shadow: 0 12px 40px rgba(13, 71, 161, 0.2);
            }

            .service-icon {
              font-size: 48px;
              margin-bottom: 16px;
              display: block;
            }

            .service-title {
              font-size: 20px;
              font-weight: 700;
              color: #0d47a1;
              margin: 12px 0;
              background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .service-desc {
              font-size: 14px;
              color: #555;
              line-height: 1.6;
              margin: 0;
              text-align: center;
            }

            @media (max-width: 768px) {
              .services-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
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

          <style>{`
            .contact-bg {
              background: linear-gradient(135deg, #0a1428 0%, #1a2332 50%, #0d47a1 100%);
              padding: 80px 20px;
              min-height: 80vh;
            }

            .contact-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 32px;
              margin-top: 50px;
              max-width: 1000px;
              margin-left: auto;
              margin-right: auto;
            }

            .contact-card {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border: 1px solid rgba(13, 71, 161, 0.1);
              border-radius: 16px;
              padding: 32px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              backdrop-filter: blur(10px);
            }

            .contact-title {
              font-size: 18px;
              font-weight: 700;
              color: #0d47a1;
              margin-bottom: 16px;
            }

            .contact-location h4 {
              font-size: 16px;
              color: #0d47a1;
              margin: 12px 0;
            }

            .contact-location p {
              font-size: 14px;
              color: #666;
              line-height: 1.8;
              margin: 0;
            }

            .contact-info {
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .contact-item {
              text-align: left;
            }

            .contact-label {
              display: block;
              font-size: 12px;
              font-weight: 700;
              color: #1565c0;
              text-transform: uppercase;
              margin-bottom: 6px;
              letter-spacing: 0.5px;
            }

            .contact-item a {
              font-size: 14px;
              color: #0d47a1;
              font-weight: 600;
              transition: all 0.2s ease;
            }

            .contact-item a:hover {
              color: #1565c0;
            }

            @media (max-width: 768px) {
              .contact-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
