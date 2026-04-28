import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Software Development',
      description: 'Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.',
      icon: '💻'
    },
    {
      title: 'Hardware Engineering',
      description: 'Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.',
      icon: '⚙️'
    },
    {
      title: 'Product Design',
      description: 'Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.',
      icon: '🎨'
    },
    {
      title: 'Research & Development',
      description: 'Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.',
      icon: '🔬'
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero" style={{ background: 'var(--c-surface)' }}>
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="page-hero-content">
          <button className="back-btn" onClick={() => navigate('/')}>← Back to Products</button>
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            Our Expertise
          </div>
          <h1>Services</h1>
          <p className="hero-sub" style={{ maxWidth: 700 }}>
            We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container" >
          <div className="services-allgrid" >
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
