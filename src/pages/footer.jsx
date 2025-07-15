import React from 'react';

import '../assets/css/footer.css';
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">

        <div className="footer-section social-media-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://github.com/NazmusSakib2036" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nazmus-sakib-303345241" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100058835270925" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="footer-section other-links-section">
          <h3>More</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" >Terms of Service</Link></li>
            <li><Link to="/faq" >FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section copyright-section">
          <p>© 2025 NUB Code Compile | Developed & Created By <a href="http://nazmussakib.me" target='_blank' rel="noopener noreferrer">Nazmus Sakib</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
