import React from 'react';
import '../styles/Menu.css';

const Menu = ({ changePage }) => {
  const handleNavigation = (sectionId) => {
    // Change page to "Home" and reset the scroll position instantly
    changePage('Home');

    setTimeout(() => {
      // Immediately set scroll to the top of the page
      window.scrollTo({ top: 0 });

      // After a slight delay, scroll to the target section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure the DOM is ready
    }, 100); // Delay to ensure the page transitions back to "Home"
  };

  return (
    <div className="menu-container">
      <div className="menu-item" onClick={() => handleNavigation('experiences-section')}>
        Experiences
      </div>
      <div className="menu-item" onClick={() => handleNavigation('skills-section')}>
        Skills
      </div>
      <div className="menu-item" onClick={() => handleNavigation('about-section')}>
        About Me
      </div>
      <div className="menu-item" onClick={() => handleNavigation('contact-section')}>
        Contact
      </div>
    </div>
  );
};

export default Menu;
