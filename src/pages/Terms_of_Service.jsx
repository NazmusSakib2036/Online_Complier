import React from 'react';
import '../assets/css/Terms_service.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>NUB Code Compile</h1>
        <h2>Terms of Service</h2>
      </div>
      
      <div className="terms-content">
        <section className="terms-section">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using NUB Code Compile ("the Service"), you agree to be bound by these Terms of Service. 
            If you do not agree to all the terms and conditions, you may not access or use the Service.
          </p>
        </section>

        <section className="terms-section">
          <h3>2. Description of Service</h3>
          <p>
            NUB Code Compile provides an online platform for compiling and executing code in various programming languages. 
            The Service may include additional features, tools, and resources as described on our website.
          </p>
        </section>

        <section className="terms-section">
          <h3>3. User Responsibilities</h3>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You agree not to use the Service for any illegal or unauthorized purpose</li>
            <li>You must not transmit any worms, viruses or any code of a destructive nature</li>
            <li>You are solely responsible for the code you compile and execute using our Service</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>4. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are owned by NUB Code Compile and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You retain ownership of any code you submit through our Service, but grant us a worldwide, non-exclusive license to execute, display, and analyze such code solely for the purpose of providing the Service.
          </p>
        </section>

        <section className="terms-section">
          <h3>5. Limitation of Liability</h3>
          <p>
            NUB Code Compile shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from:
          </p>
          <ul>
            <li>Your use or inability to use the Service</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from our Service</li>
            <li>Any bugs, viruses, or similar that may be transmitted through our Service</li>
          </ul>
        </section>

        <section className="terms-section">
          <h3>6. Modifications to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the updated Terms of Service on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="terms-section">
          <h3>7. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where NUB Code Compile is established, without regard to its conflict of law provisions.
          </p>
        </section>

        <div className="terms-update">
          <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
          <p>For questions about these Terms, contact: <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;