import React from 'react';
import '../styles/About.css';
import soccer1 from '../assets/soccer1.png';
import soccer2 from '../assets/soccer2.png';
import airplane from '../assets/airplane.png';

const About = () => {
  const images = [
    {
      image: soccer1,
      alt: 'Soccer Game 1',
    },
    {
      image: soccer2,
      alt: 'Soccer Game 2',
    },
    {
      image: airplane,
      alt: 'Airplane',
    },
  ];

  return (
    <section className="experiences">
      <h3>About Me</h3>
      <h5>
        Hamza Kaderi at day, Software Engineer at night. Here is a little sneak peek into my life.
      </h5>
      <div className="gallery">
        {images.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.alt} className="gallery-image" />
            <div className="overlay">
              <i className="icon fas fa-eye"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
