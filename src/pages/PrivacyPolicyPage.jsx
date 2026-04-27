import React, { useEffect } from 'react';
import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: '1. INFORMATION COLLECTION',
      points: [
        'We collect personal identification information such as name, email address, and contact details when you register on our platform.',
        'Technical data including IP addresses, browser types, and operating system information are automatically logged during your visit.',
        'Usage data regarding how you interact with our mission-critical aerospace software and services is monitored for performance optimization.',
        'We may receive information from third-party partners and public databases to enhance our service delivery and security protocols.'
      ]
    },
    {
      id: 2,
      title: '2. INFORMATION USE',
      points: [
        'To provide, maintain, and improve our aerospace technology solutions and platform functionality.',
        'To process transactions and send related information, including confirmations and technical notices.',
        'To communicate with you about products, services, offers, and events offered by TechBrain Networks.',
        'To monitor and analyze trends, usage, and activities in connection with our services for research and development.'
      ]
    },
    {
      id: 3,
      title: '3. INFORMATION SHARING',
      points: [
        'We do not sell your personal information to third parties for marketing purposes.',
        'We may share data with trusted service providers who perform functions on our behalf under strict confidentiality agreements.',
        'Information may be disclosed if required by law, such as to comply with a subpoena or similar legal process.',
        'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.'
      ]
    },
    {
      id: 4,
      title: '4. INFORMATION SECURITY',
      points: [
        'We implement industry-standard encryption and security measures to protect your data from unauthorized access or disclosure.',
        'Regular security audits and vulnerability assessments are conducted to ensure the integrity of our aerospace systems.',
        'Access to personal data is restricted to authorized employees and contractors who need the information to perform their duties.',
        'While we strive for maximum security, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute safety.'
      ]
    },
    {
      id: 5,
      title: '5. COOKIES',
      points: [
        'We use cookies to enhance your browsing experience and remember your preferences across sessions.',
        'Analytical cookies help us understand how visitors use our site, allowing us to improve navigation and content.',
        'You can choose to disable cookies through your browser settings, though some features of the site may not function properly.',
        'Third-party services we use, such as analytics providers, may also set cookies on your device.'
      ]
    },
    {
      id: 6,
      title: '6. LINKS TO OTHER WEBSITES',
      points: [
        'Our platform may contain links to external sites that are not operated by TechBrain Networks.',
        'We have no control over the content and practices of these third-party sites and cannot accept responsibility for their privacy policies.',
        'We encourage you to review the privacy policy of every site you visit via an external link.',
        'Linking to a third-party site does not imply endorsement of its content or its data handling practices.'
      ]
    },
    {
      id: 7,
      title: "7. CHILDREN'S PRIVACY",
      points: [
        'Our services are not intended for use by children under the age of 13.',
        'We do not knowingly collect personal information from children under 13 years of age.',
        'If we become aware that we have collected data from a child under 13, we will take immediate steps to delete such information.',
        'Parents or guardians who believe their child has provided personal information to us should contact us immediately.'
      ]
    },
    {
      id: 8,
      title: '8. CHANGES TO THIS PRIVACY POLICY',
      points: [
        'We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or legal requirements.',
        'The "Last Updated" date at the top of this page will indicate when the most recent changes were made.',
        'Significant changes will be notified to registered users via email or a prominent notice on our homepage.',
        'Continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.'
      ]
    },
    {
      id: 9,
      title: '9. YOUR RIGHTS',
      points: [
        'You have the right to access the personal information we hold about you and request a copy of your data.',
        'You can request the correction of inaccurate or incomplete personal information in our records.',
        'Subject to certain legal obligations, you have the right to request the deletion of your personal data.',
        'You may object to or request the restriction of the processing of your personal information in specific circumstances.'
      ]
    },
    {
      id: 10,
      title: '10. CONTACT',
      points: [
        'For any questions or concerns regarding this Privacy Policy, please contact our Data Protection Office.',
        'Email: contact@techbrainnetworks.com',
        'Phone: +91 8754906714',
        'Address: Thanjavur 614201, Tamilnadu, India'
      ]
    }
  ];

  return (
    <div className="privacy-page">
      <div className="container">
        <header className="privacy-header">

          <h1>Privacy Policy</h1>

        </header>

        <div className="privacy-content">
          <div className="privacy-intro">
            <p>
              At TechBrain Networks Aerospace Division, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and share information through our aerospace platform and services.
            </p>
          </div>

          <div className="privacy-sections">
            {sections.map((sec) => (
              <section key={sec.id} className="privacy-section">
                <h2>{sec.title}</h2>
                <ul className="policy-list">
                  {sec.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="privacy-footer">
            <p>
              By using our services, you acknowledge that you have read and understood this Privacy Policy. 
              If you do not agree with our policies and practices, your choice is not to use our Aerospace platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
