import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComment} from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import origami from '.././assets/origami.png';

const Header = ({changePage}) => {
  return (
    <header>
      <nav className='navBar'>
        <div className='navBar-items'>
          <img src={origami} className='logoBird'/>
          <h1 className='navBar-seperator'>
            |
          </h1>
          <h2 onClick={() => {
            changePage('Menu');
          }}>
            MENU
          </h2>
        </div>
        <div className='navBar-items'>
        <FontAwesomeIcon icon={faComment} style={{ transform: 'scaleX(-1)'}} className='logo-icon'/>
         <h2>
         <a href="https://proonsite.ca/" target="_blank" rel="noopener noreferrer">
              HIRE ME
            </a>
         </h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;