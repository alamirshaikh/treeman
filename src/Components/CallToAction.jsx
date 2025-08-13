import React from "react";
import "../Style/CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let's create something beautiful together. Contact us for a consultation.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}
