import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <a href="#home" className="nav-logo">Sunaina Anand</a>
      
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
