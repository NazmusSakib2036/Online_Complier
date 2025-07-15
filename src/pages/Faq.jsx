import React from 'react';
import '../assets/css/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>NUB Code Compile</h1>
        <h2>Frequently Asked Questions</h2>
      </div>
      
      <div className="faq-content">
        <section className="faq-section">
          <h3>General Questions</h3>
          
          <div className="faq-item">
            <h4>What is NUB Code Compile?</h4>
            <p>
              NUB Code Compile is an online platform that allows you to write, compile, and execute code in various programming languages directly in your browser, without any setup or installation required.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Is NUB Code Compile free to use?</h4>
            <p>
              Yes, our basic service is completely free to use. We may offer premium features in the future, but core functionality will remain free.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Which programming languages are supported?</h4>
            <p>
              We currently support popular languages including JavaScript, Python, Java, C++, and more. Our list of supported languages is regularly updated.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <h3>Account & Security</h3>
          
          <div className="faq-item">
            <h4>Do I need an account to use NUB Code Compile?</h4>
            <p>
              Basic compilation features are available without an account. However, creating an account allows you to save your code snippets and access additional features.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>How is my data secured?</h4>
            <p>
              We implement industry-standard security measures including encryption, secure servers, and regular audits to protect your data. However, we recommend not uploading sensitive information.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Can I delete my account?</h4>
            <p>
              Yes, you can delete your account at any time through your account settings. This will permanently remove all your saved data from our servers.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <h3>Technical Questions</h3>
          
          <div className="faq-item">
            <h4>What are the execution time and memory limits?</h4>
            <p>
              Free accounts currently have a 5-second execution time limit and 256MB memory limit per execution. These limits may vary by language.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>How current are the language versions?</h4>
            <p>
              We strive to keep our language versions up-to-date. You can check the specific version information in the compiler selection dropdown.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Can I access external libraries?</h4>
            <p>
              For security reasons, access to external libraries is limited. We provide a selection of commonly used libraries for each language.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <h3>Support & Contact</h3>
          
          <div className="faq-item">
            <h4>How can I report a bug or issue?</h4>
            <p>
              Please email us at <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a> with details about the issue, including any error messages and steps to reproduce.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Can I request a new language or feature?</h4>
            <p>
              Absolutely! We welcome feature requests. Please contact us with your suggestions.
            </p>
          </div>
          
          <div className="faq-item">
            <h4>Where can I find updates about the service?</h4>
            <p>
              Major updates are announced on our website and through email notifications (if you've subscribed).
            </p>
          </div>
        </section>

        <div className="faq-update">
          <p>Still have questions? Contact us at <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;