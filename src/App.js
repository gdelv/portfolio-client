/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import NavBar from './components/shared/NavBar';
import Hero from './components/shared/Hero';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
