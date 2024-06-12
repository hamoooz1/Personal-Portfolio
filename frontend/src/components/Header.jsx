import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComment} from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import origami from '.././assets/origami.png';

const Header = () => {
  return (
    <header>
      <nav className='navBar'>
        <div className='navBar-items'>
          <img src={origami} className='logoBird'/>
          <h1 className='navBar-seperator'>
            |
          </h1>
          <h2>
            MENU
          </h2>
        </div>
        <div className='navBar-items'>
        <FontAwesomeIcon icon={faComment} style={{ transform: 'scaleX(-1)'}} className='logo-icon'/>
         <h2>
           HIRE ME
         </h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;