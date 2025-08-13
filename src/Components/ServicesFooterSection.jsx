import React from "react";
import "../Style/CallToAction.css";
import { useNavigate } from "react-router-dom";

export default function ServicesFooterSection() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/contact"); // replace with your target route
    };
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Ready to Transform Your Outdoor Space? </h2>
        <p>
        Contact us today for a free consultation and personalized quote
        </p>
        <button onClick={handleClick} className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}
