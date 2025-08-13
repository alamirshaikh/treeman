import React from "react";
import "../Style/TreemanPromo.css";

const TreemanPromo = () => {
  return (
    <section className="why-choose-us">
      <h1 className="title">Why Choose Us</h1>
      <p className="subtitle">
        Treeman Services is a one-stop window, providing sustainable green spaces to
        individuals and commercial property holders. We provide end-to-end solutions for
        all your plant care needs.
      </p>

      <div className="content-row">
        {/* Left Column */}
        <div className="philosophy-box">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
            alt="Our Philosophy"
            className="philosophy-image"
          />
          <div className="philosophy-text">
            <h3>Our Philosophy</h3>
            <p>
              The year 2022 saw the birth of Treeman. Our motto is to bring the benefits
              of green makeovers, tree services, and quality plants to every doorstep,
              helping people embrace nature in their everyday lives.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="cards-column">
          <div className="card_">
            <div className="card-icon">🌱</div>
            <h3>Expert Care</h3>
            <p>
              Your plants are living beings and deserve love and care. Our experts ensure
              they grow healthy and strong.
            </p>
          </div>
          <div className="card_">
            <div className="card-icon">🛠</div>
            <h3>Craftsmanship</h3>
            <p>
              We offer beautifully designed landscapes crafted to match our clients’
              preferences while keeping sustainability in mind.
            </p>
          </div>
          <div className="card_">
            <div className="card-icon">😊</div>
            <h3>Customer Satisfaction</h3>
            <p>
              We deliver happiness through our complete range of expert landscaping
              services, both residential and commercial.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat">
          <div className="stat-circle">20+</div>
          <p>Years of Excellence</p>
        </div>
        <div className="stat">
          <div className="stat-circle">1000+</div>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <div className="stat-circle">500+</div>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <div className="stat-circle">20+</div>
          <p>Expert Team Members</p>
        </div>
      </div>
    </section>
  );
};

export default TreemanPromo;
