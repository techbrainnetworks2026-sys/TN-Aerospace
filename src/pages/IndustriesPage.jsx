import { industries } from '../data/industries';
import './IndustriesPage.css';

export default function IndustriesPage() {
  return (
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
  );
}
