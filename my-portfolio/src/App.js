import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
  );
}

export default App;
