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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;