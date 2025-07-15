import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', closeMenu);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('scroll', closeMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', closeMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => handleLinkClick('home')}>
        NUB Code <span>Compile</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <span className="navbar-toggle-icon">{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
          <Link
            to="/Learn"
            className={`navbar-link ${activeLink === 'learn' ? 'active' : ''}`}
            onClick={() => handleLinkClick('learn')}
          >
            Learn
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-auth">
          <Link to="/login" className="navbar-auth-btn login" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/register" className="navbar-auth-btn register" onClick={closeMenu}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
