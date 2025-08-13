import React from "react";
import "../Style/CallToAction.css";
import { useNavigate } from "react-router-dom";
export default function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your target route
  };
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let's create something beautiful together. Contact us for a consultation.
        </p>
        <button onClick={handleClick} className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}
