import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';
import profilePic from '.././assets/profile-pic.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000)
  }, []);

  return (
    <main className="main">
      <section className="intro">
        <h1>Hi, my <br />name is <span className="name">Hamza</span>.</h1>
        <p className={`${isVisible ? 'aboutMe' : 'aboutMe-not-visible'}`}>
          I'm an <span className="highlight">independent creative developer</span> from <br />Vancouver, Canada
        </p>
      </section>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </main>
  );
};

export default Hero;
