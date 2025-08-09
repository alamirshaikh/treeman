import React, { useState } from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="./Images/logo.png" alt="Treeman Logo" />
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Section */}
        <div className="right-section">
          <span className="phone">📞 +91 773-800-4023</span>
          <a href="#quote" className="quote-btn">Free Quote</a>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
