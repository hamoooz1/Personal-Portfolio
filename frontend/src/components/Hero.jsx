import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
        <p>Building innovative solutions one line of code at a time.</p>
        <a href="#projects" className="cta">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;