import { careers } from '../data/careers';

export default function CareersPage() {
  return (
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
  );
}
