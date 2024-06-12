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
import { useState, useEffect } from 'react';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setShowCheckmark(true);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Duration of the exit transition
      }, 1000); // Time to show the checkmark before exiting
    }, 3000); // Change the timeout to match your actual loading time
  }, []);

  return (
  <div className="background-container">
       <div className="App">
      {isLoading ? (
        <Loading isExiting={isExiting} showCheckmark={showCheckmark} />
      ) : (
        <>
          <Header />
          <Hero />
          <Skills />
          <Experiences />
          <About />
          <Projects />
          <Resume />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  </div>
  );
}

export default App;