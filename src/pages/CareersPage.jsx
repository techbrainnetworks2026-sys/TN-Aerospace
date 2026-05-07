import React from 'react';
import './CareersPage.css';
import { careers as jobRoles } from '../data/careers';
import heroBg from '../assets/careers-hero.png';

// SVG Icons for different roles
const IconMap = {
  'fpga-engineer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <path d="M9 9h6v6H9z"></path>
      <path d="M9 1v3"></path>
      <path d="M15 1v3"></path>
      <path d="M9 20v3"></path>
      <path d="M15 20v3"></path>
      <path d="M20 9h3"></path>
      <path d="M20 15h3"></path>
      <path d="M1 9h3"></path>
      <path d="M1 15h3"></path>
    </svg>
  ),
  'hardware-design': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
    </svg>
  ),
  'robotics-engineer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  'ml-engineer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
      <path d="M12 12L2.1 12.1"></path>
      <path d="M12 12L12 22.1"></path>
      <path d="M12 12l7.07-7.07"></path>
      <path d="M12 12l7.07 7.07"></path>
    </svg>
  ),
  'verification-engineer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  ),
  'vlsi-design': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2h20v20H2z"></path>
      <path d="M7 2v20"></path>
      <path d="M17 2v20"></path>
      <path d="M2 7h20"></path>
      <path d="M2 17h20"></path>
    </svg>
  ),
  'physical-design': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  'cad-cam-designer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  )
};

export default function CareersPage() {
  return (
    <section className="careers-section" id="careers">
      <div 
        className="careers-header"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 1)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <span className="eyebrow">Join the Future of Aerospace</span>
          <h1>Engineering Opportunities</h1>
          <p className="subtitle">
            Join our team of elite engineers building the next generation of aerospace technology. 
            From deep space exploration to advanced avionics, find your mission here.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="careers-grid">
          {jobRoles.map((role) => (
            <div key={role.id} className="career-card">
              <div className="card-header">
                <div className="role-icon-wrapper">
                  {IconMap[role.id] || <span>💼</span>}
                </div>
                <h3>{role.title}</h3>
              </div>

              <div className="card-content">
                <div className="info-group">
                  <label>Applications</label>
                  <ul className="info-list">
                    {role.usedIn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-group">
                  <label>Core Skills</label>
                  <div className="skills-wrap">
                    {role.requiredSkills.map((skill, idx) => (
                      <span key={idx} className="skill-tag primary">{skill}</span>
                    ))}
                    {role.additionalSkills && role.additionalSkills.map((skill, idx) => (
                      <span key={idx} className="skill-tag secondary">{skill}</span>
                    ))}
                  </div>
                </div>

                {role.importance && (
                  <div className="info-group">
                    <label>Why It Matters</label>
                    <p className="importance-text">{role.importance}</p>
                  </div>
                )}

                {role.usageContext && (
                  <div className="info-group">
                    <label>Industry Impact</label>
                    <p className="importance-text">{role.usageContext}</p>
                  </div>
                )}
              </div>

              <div className="card-footer">
                <button className="apply-btn">Launch Application</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

