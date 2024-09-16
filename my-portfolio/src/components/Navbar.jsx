import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="nav-container">
      <a className="nav-logo" onClick={() => scrollToSection('home')}>Sunaina Anand</a>
      
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776;
      </div>
      
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About Me</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
