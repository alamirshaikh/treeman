import React from 'react';
import '../Style/Footer.css'; // Assuming you'll create a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="./Images/logo.png" alt="TreeMan Logo" className="footer-logo" />
          <p>Professional tree care and maintenance services in Mumbai and surrounding areas.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Landscape Design</a></li>
            <li><a href="#">Lawn Care</a></li>
            <li><a href="#">Hardscaping</a></li>
            <li><a href="#">Terrace Transformation</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li><i className="fas fa-phone"></i> +91 773-800-4023</li>
            <li><i className="fas fa-envelope"></i> info@treemanservices.in</li>
            <li><i className="fas fa-clock"></i> 10 AM - 7 PM (All Days)</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Treeman Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;