import React from "react";
import "../Style/CallToAction.css";
import { useNavigate } from "react-router-dom";

export default function CallToAbout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your target route
  };
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Ready to Work with Us?</h2>
        <p>
        Experience the Treeman difference. Contact us today for a consultation.
        </p>
        <button onClick={handleClick} className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}
