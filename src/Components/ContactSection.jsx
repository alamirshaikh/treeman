import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaExclamationTriangle } from "react-icons/fa";
import "../Style/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Heading */}
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Ready to transform your space? Contact us for a free consultation and personalized quote.
      </p>

      {/* Map */}
      <div className="map-box">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.864107140015!2d72.830267!3d18.922063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzE5LjQiTiA3MsKwNDknNDkuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Location */}
      <div className="location-box">
        <FaMapMarkerAlt className="icon" />
        <div>
          <strong>Our Location</strong>
          <p>Treeman Services Pvt Ltd, Mumbai, Maharashtra, India</p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="contact-grid">
        {/* Left column */}
        <div className="contact-info">
          <div className="info-card">
            <h4>Contact Information</h4>
            <p><FaPhoneAlt className="info-icon" /> +91 773-800-4023</p>
            <p><FaEnvelope className="info-icon" /> info@treemanservices.in</p>
            <p><FaClock className="info-icon" /> 10 AM - 7 PM (All Days)</p>
          </div>

          <div className="emergency-card">
            <h4><FaExclamationTriangle className="info-icon" /> Emergency Services</h4>
            <p>
              Available 24/7 for emergency tree care situations. Call our emergency hotline for immediate assistance.
            </p>
            <button className="emergency-btn">
              <FaPhoneAlt /> Emergency Hotline
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="contact-form">
          <h4>Send Us a Message</h4>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" />
            <select>
              <option>Select a service</option>
              <option>Landscaping</option>
              <option>Tree Care</option>
              <option>Garden Maintenance</option>
            </select>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message ➜</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
