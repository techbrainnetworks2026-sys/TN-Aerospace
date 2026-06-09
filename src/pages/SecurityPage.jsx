import { useEffect } from 'react';
import './SecurityPage.css';

const sections = [
  {
    id: 1,
    title: 'Data Protection & Encryption',
    points: [
      'All sensitive data is encrypted using industry-standard AES-256 encryption at rest.',
      'Data in transit is protected using TLS 1.3 protocols to ensure secure communication between clients and our servers.',
      'We employ hardware security modules (HSM) for managing and protecting cryptographic keys.',
      'Regular database snapshots and encrypted backups are maintained in geographically redundant locations.'
    ]
  },
  {
    id: 2,
    title: 'Infrastructure Security',
    points: [
      'Our infrastructure is hosted in ISO 27001, SOC 2 Type II, and PCI DSS compliant data centers.',
      'We use advanced Web Application Firewalls (WAF) to protect against common web exploits and DDoS attacks.',
      'Continuous monitoring and automated alerting systems are in place to detect and respond to security incidents.',
      'Regular penetration testing is performed by independent third-party security firms.'
    ]
  },
  {
    id: 3,
    title: 'Access Control',
    points: [
      'Multi-factor authentication (MFA) is mandatory for all employee access to production systems.',
      'We follow the principle of least privilege (PoLP), ensuring personnel only have access to data necessary for their role.',
      'Automated session management and periodic access reviews are conducted to prevent unauthorized access.',
      'Detailed audit logs are maintained for all administrative actions and data access events.'
    ]
  },
  {
    id: 4,
    title: 'Compliance & Audits',
    points: [
      'We strictly adhere to global privacy regulations, including GDPR, CCPA, and regional data protection laws.',
      'Internal security audits are conducted quarterly to verify compliance with our internal security policies.',
      'We provide transparent reporting on security incidents and our response measures to affected parties.',
      'Our development lifecycle follows OWASP Top 10 security best practices to minimize software vulnerabilities.'
    ]
  }
];

export default function SecurityPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="security__page-wrapper">
      <div className="security__container container">
        <header className="security__header">
          <div className="security__eyebrow eyebrow">Trust &amp; Safety</div>
          <h1 className="security__title">Security Policy</h1>
          <p className="security__tagline">Reliability in every layer of the mission.</p>
        </header>

        <div className="security__content">
          <div className="security__intro">
            <p className="security__intro-text">
              At TechBrain Networks, security is not just a feature; it is the foundation of our aerospace operations.
              We implement multi-layered security protocols to ensure that your mission-critical data remains confidential, available, and integral.
            </p>
          </div>

          <div className="security__sections">
            {sections.map((sec) => (
              <section key={sec.id} className="security__section">
                <h2 className="security__section-title">{sec.title}</h2>
                <ul className="security__policy-list">
                  {sec.points.map((point, idx) => (
                    <li key={idx} className="security__policy-item">{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="security__footer">
            <p className="security__footer-text">
              Security is a shared responsibility. If you believe you have found a security vulnerability in our platform,
              please report it to <a href="mailto:security@techbrainnetworks.com" className="security__footer-link">security@techbrainnetworks.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
