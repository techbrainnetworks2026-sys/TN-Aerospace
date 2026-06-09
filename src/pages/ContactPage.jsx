import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact__page">
      <section className="contact__bg">
        <div className="contact__container container">
          <div className="contact__sec-head">
            <div className="contact__eyebrow eyebrow">Get In Touch</div>
            <h2 className="contact__sec-title" style={{ color: 'white' }}>Contact Us</h2>
            <p className="contact__sec-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements.
            </p>
          </div>

          <div className="contact__grid">
            <div className="contact__card">
              <h3 className="contact__title">India</h3>
              <div className="contact__location">
                <h4 className="contact__city">Thanjavur</h4>
                <p className="contact__address">6/12 Papa vaikal Street, Ayyampettai Post<br />Papanasam Taluk<br />Thanjavur 614201, Tamilnadu, India.</p>
              </div>
            </div>

            <div className="contact__card">
              <h3 className="contact__title">United Kingdom</h3>
              <div className="contact__location">
                <h4 className="contact__city">London</h4>
                <p className="contact__address">71-75 Shelton Street, Covent Garden,<br />London, WC2H 9JQ, United Kingdom.</p>
              </div>
            </div>

            <div className="contact__card">
              <h3 className="contact__title">Direct Contact</h3>
              <div className="contact__info">
                <div className="contact__item">
                  <span className="contact__label">Phone</span>
                  <a href="tel:+918754906714" className="contact__link">+91 8754906714</a>
                </div>
                <div className="contact__item">
                  <span className="contact__label">Email</span>
                  <a href="mailto:contact@techbrainnetworks.com" className="contact__link">contact@techbrainnetworks.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
