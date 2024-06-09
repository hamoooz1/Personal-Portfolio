import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <main className="main">
      <section className="intro">
        <h1>Hi, my name is <span className="name">Robb</span>.</h1>
        <p>I'm an <span className="highlight">independent creative developer</span> from Abergavenny, South Wales.</p>
        <div className="avatar">
          <img src="avatar.png" alt="Avatar" />
        </div>
      </section>
    </main>
  );
};

export default Hero;