import React from 'react';
import '../assets/css/privacy_poli.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>NUB Code Compile</h1>
        <h2>Privacy Policy</h2>
      </div>
      
      <div className="privacy-content">
        <section className="policy-section">
          <h3>1. Introduction</h3>
          <p>
            Welcome to NUB Code Compile. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="policy-section">
          <h3>2. Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> Includes email address.</li>
            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> Includes information about how you use our website and services.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>4. Data Security</h3>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section className="policy-section">
          <h3>5. Your Legal Rights</h3>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="policy-section">
          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a>
          </p>
        </section>

        <div className="policy-update">
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;