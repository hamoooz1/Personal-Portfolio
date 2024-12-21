import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="social-links">
        <li>
          <a href="https://github.com/hamoooz1" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hamza-kaderi-10a496291/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://x.com/kaderidev" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://proonsite.ca/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://proonsite.ca/wp-content/uploads/2022/02/Pro-On-Site-Logo.png" alt="ProOnSite Logo" className="proonsite-logo" />
          </a>
        </li>
        <li>
          <a href="mailto:kaderidev@gmail.com" className="social-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="tel:7783028595" className="social-link">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
      </ul>
      <p className="corp-tag">&copy; 2024 Hamza Kaderi</p>
    </footer>
  );
};

export default Footer;
