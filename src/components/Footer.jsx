import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const cols = [
    {
      head: 'Products',
      links: ['Satellite C2 Software', 'Orbital Dynamics Tools', 'Telemetry Analysis', 'Mission Planning', 'Space Weather Forecasting'],
    },
    {
      head: 'Solutions',
      links: ['Commercial Space', 'Government & Defence', 'Scientific Research', 'Education', 'Deep Space Missions'],
    },
    {
      head: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Blog', path: '/' },
        { label: 'Careers', path: '/' },
        { label: 'Contact', path: '/' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <span className="brand-icon">🛰</span>
              <span><span className="brand-accent">TechBrain</span> Aerospace</span>
            </div>
            <p className="footer-desc">
              A TechBrain Networks initiative. Mission-critical aerospace software for the next generation of space exploration — engineered for precision, built for the cosmos.
            </p>
            <div className="footer-socials">
              {['𝕏', 'in', '𝔾', '▶'].map((s) => <div key={s} className="social-btn">{s}</div>)}
            </div>
          </div>

          {cols.map(({ head, links }) => (
            <div key={head}>
              <div className="footer-col-head">{head}</div>
              <ul className="footer-links">
                {links.map((l) => {
                  const label = typeof l === 'string' ? l : l.label;
                  const path = typeof l === 'string' ? '/' : l.path;
                  return (
                    <li key={label}>
                      <span className="footer-lnk" onClick={() => navigate(path)}>{label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bar">
          <span>© 2026 TechBrain Aerospace · A TechBrain Networks Company.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Security'].map((l) => <span key={l} className="footer-lnk">{l}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
