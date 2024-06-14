import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
import Loading from './components/Loading';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';


function App() {

  const [page, setPage] = useState('Loading');
  const [isExiting, setIsExiting] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setShowCheckmark(true);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setPage('Home');
        }, 1000); // Duration of the exit transition
      }, 1000); // Time to show the checkmark before exiting
    }, 3000); // Change the timeout to match your actual loading time
  }, []);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
  <div className="background-container">
       <div className="App">
      {page == 'Loading' && <Loading isExiting={isExiting} showCheckmark={showCheckmark} />}
      {page == 'Home' &&
        <>
          <Header changePage={changePage}/>
          <Hero />
          <Experiences />
          <Projects />
          <Resume />
          <Blog />
          <Contact />
          <About />
          <Skills />
          <Footer />
        </>
    }
    {page == 'Menu' && <Menu/>}
    </div>
  </div>
  );
}

export default App;