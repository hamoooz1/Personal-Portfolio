import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="social-links">
        <li><a href="https://github.com/username">GitHub</a></li>
        <li><a href="https://linkedin.com/in/username">LinkedIn</a></li>
        <li><a href="https://twitter.com/username">Twitter</a></li>
      </ul>
      <p>&copy; 2024 John Doe</p>
    </footer>
  );
};

export default Footer;
