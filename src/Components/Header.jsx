import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="img-header">
        <img src="../images/logo.png" alt='logo' />
      </div>
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <div className={`header-title fst-italic ${isOpen ? 'active' : ''}`}>
        <a className="nav-link btn-home" href="#scrollspyHeading1" onClick={closeMenu}>Home</a>
        <a className="nav-link btn-about" href="#scrollspyHeading2" onClick={closeMenu}>Chi sono</a>
        <a className="nav-link btn-contact" href="#scrollspyHeading3" onClick={closeMenu}>Contatti</a>
      </div>
    </header>
  )
}

export default Header
