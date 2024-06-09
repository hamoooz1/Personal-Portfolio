import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCommentDots, faMountain } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav className='navBar'>
        <div className='navBar-items'>
          <FontAwesomeIcon icon={faMountain} className="logo-icon" />
          <h1>
            |
          </h1>
          <h2>
            Menu
          </h2>
        </div>
        <div className='navBar-items'>
         <FontAwesomeIcon icon={faCommentDots} className="message-icon" />
         <h2>
           Contact Me
         </h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;