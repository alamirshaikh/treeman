import React, { useState } from "react";
import { Link } from 'react-router-dom'
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
  <Link to="/">Home</Link>
  <Link to="/gallery">Gallery</Link>
  <Link to="/about">About</Link>
  <Link to="/services">Services</Link>
  <Link to="/contact">Contact</Link>
</nav>
        {/* Right Section */}
        <div className="right-section">
          <span className="phone">📞 +91 773-800-4023</span>
          <a href="/contact" className="quote-btn">Free Quote</a>
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
