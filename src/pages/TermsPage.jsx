import React, { useEffect } from 'react';
import './TermsPage.css';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: '1. INTRODUCTION',
      points: [
        'Welcome to TechBrain Networks Aerospace Division. These Terms and Conditions govern your use of our website and aerospace services.',
        'By accessing or using our platform, you agree to be bound by these terms in their entirety.',
        'If you disagree with any part of these terms, you must not use our website or services.',
        'We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.'
      ]
    },
    {
      id: 2,
      title: '2. USE OF THE WEBSITE',
      points: [
        'You must use this website only for lawful purposes and in a way that does not infringe the rights of others.',
        'Prohibited behavior includes harassing or causing distress to any other user, or transmitting obscene or offensive content.',
        'You are responsible for ensuring that all persons who access our site through your internet connection are aware of these terms.',
        'We reserve the right to restrict access to certain areas of this website, or indeed this entire website, at our discretion.'
      ]
    },
    {
      id: 3,
      title: '3. INTELLECTUAL PROPERTY',
      points: [
        'Unless otherwise stated, TechBrain Networks owns the intellectual property rights for all material on the website.',
        'All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions.',
        'You must not republish, sell, rent, or sub-license material from this website without prior written consent.',
        'Redistribution of content is only permitted if the content is specifically made for redistribution.'
      ]
    },
    {
      id: 4,
      title: '4. DISCLAIMER OF WARRANTIES',
      points: [
        'Our services are provided "as is" and "as available" without any representations or warranties, express or implied.',
        'We do not warrant that the website will be constantly available, or available at all, or that the information is complete or accurate.',
        'TechBrain Networks does not warrant that this website or the server that makes it available are free of viruses or other harmful components.',
        'Nothing on this website constitutes, or is meant to constitute, advice of any kind.'
      ]
    },
    {
      id: 5,
      title: '5. LIMITATION OF LIABILITY',
      points: [
        'TechBrain Networks will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website.',
        'We are not liable for any indirect, special, or consequential loss arising under these terms and conditions.',
        'These limitations of liability apply even if TechBrain Networks has been expressly advised of the potential loss.',
        'Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit.'
      ]
    },
    {
      id: 6,
      title: '6. LINKS TO THIRD-PARTY WEBSITES',
      points: [
        'This website may include links to third-party websites that are controlled and maintained by others.',
        'Any link to other websites is not an endorsement of such websites and you acknowledge that we are not responsible for the content.',
        'We have no control over the nature, content, and availability of those sites.',
        'The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.'
      ]
    },
    {
      id: 7,
      title: '7. PRIVACY POLICY',
      points: [
        'Your use of our website is also governed by our Privacy Policy, which is incorporated into these terms by reference.',
        'Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.',
        'By using our services, you consent to the data practices described in the Privacy Policy.',
        'We are committed to protecting your privacy and security in accordance with applicable laws.'
      ]
    },
    {
      id: 8,
      title: '8. INDEMNIFICATION',
      points: [
        'You hereby indemnify TechBrain Networks and undertake to keep TechBrain Networks indemnified against any losses or damages.',
        'This includes any legal expenses incurred by TechBrain Networks in connection with any breach by you of these terms.',
        'You agree to cooperate as fully as reasonably required in the defense of any claim.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.'
      ]
    },
    {
      id: 9,
      title: '9. GOVERNING LAW AND JURISDICTION',
      points: [
        'These terms and conditions will be governed by and construed in accordance with the laws of India.',
        'Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Tamilnadu.',
        'We reserve the right to bring proceedings in the relevant courts of your country of residence or any other relevant country.',
        'The invalidity of any provision of these terms under any law will not affect the validity of the remaining provisions.'
      ]
    },
    {
      id: 10,
      title: '10. ENTIRE AGREEMENT',
      points: [
        'These terms and conditions constitute the entire agreement between you and TechBrain Networks in relation to your use of this website.',
        'They supersede all previous agreements in respect of your use of this website.',
        'No other representations or warranties shall be binding unless made in writing and signed by an authorized representative.',
        'We may update these terms from time to time, and the latest version will always be posted on this page.'
      ]
    },
    {
      id: 11,
      title: '11. SEVERABILITY',
      points: [
        'If a provision of these terms and conditions is determined by any court to be unlawful and/or unenforceable, the other provisions will continue in effect.',
        'If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed deleted.',
        'The remainder of the provision will continue in effect to the maximum extent permitted by law.',
        'We will replace any unenforceable provision with a valid one that closely matches the original intent.'
      ]
    },
    {
      id: 12,
      title: '12. WAIVER',
      points: [
        'No waiver of any provision of these terms and conditions shall be effective unless it is in writing and signed by TechBrain Networks.',
        'A failure to exercise or delay in exercising a right or remedy provided by these terms does not constitute a waiver.',
        'A waiver on one occasion does not mean a waiver of that right or remedy on any future occasion.',
        'All rights and remedies provided in these terms are cumulative and not exclusive of any rights or remedies provided by law.'
      ]
    },
    {
      id: 13,
      title: '13. ASSIGNMENT',
      points: [
        'TechBrain Networks may transfer, sub-contract, or otherwise deal with TechBrain Networks\' rights and/or obligations under these terms.',
        'You may not transfer, sub-contract, or otherwise deal with your rights and/or obligations under these terms.',
        'We may assign our rights to any affiliate or successor in interest in the event of a merger or acquisition.',
        'Any attempted assignment in violation of this section shall be null and void.'
      ]
    },
    {
      id: 14,
      title: '14. CONTACT US',
      points: [
        'If you have any questions about these Terms and Conditions, please contact us.',
        'Email: contact@techbrainnetworks.com',
        'Phone: +91 8754906714',
        'Address: Thanjavur 614201, Tamilnadu, India'
      ]
    },
    {
      id: 15,
      title: '15. ACKNOWLEDGEMENT',
      points: [
        'By using our website or services, you acknowledge that you have read these Terms and Conditions.',
        'You understand the terms and agree to be bound by them in their entirety.',
        'You confirm that you have the legal capacity to enter into this agreement.',
        'This acknowledgement constitutes a binding legal agreement between you and TechBrain Networks.'
      ]
    }
  ];

  return (
    <div className="terms-page">
      <div className="container">
        <header className="terms-header">
          <h1>Terms and Conditions</h1>
        </header>

        <div className="terms-content">
          <div className="terms-intro">
            <p>
              Please read these Terms and Conditions carefully before using the TechBrain Networks Aerospace platform. 
              These terms establish the legal relationship between you and our organization regarding your access to our mission-critical services.
            </p>
          </div>

          <div className="terms-sections">
            {sections.map((sec) => (
              <section key={sec.id} className="terms-section">
                <h2>{sec.title}</h2>
                <ul className="policy-list">
                  {sec.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="terms-footer">
            <p>
              Last Updated: April 27, 2026. 
              © 2026 TechBrain Networks Aerospace Division. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
