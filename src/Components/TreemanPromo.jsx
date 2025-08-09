import React from 'react';
import "../Style/TreemanPromo.css"; // Assuming you'll create a separate CSS file

const TreemanPromo = () => {
  return (
    <section className="why-choose-us">
      <h1 className="title">Why Choose Us</h1>
      <p className="subtitle">
        Treeman Services is a one-stop window, providing sustainable green spaces to
        individuals and commercial property holders. We provide end to end solutions for
        all your plant care needs.
      </p>
      <div className="content-row">
        <div className="philosophy-box">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
            alt="Our Philosophy"
            className="philosophy-image"
          />
          <div className="philosophy-text">
            <h3>Our Philosophy</h3>
            <p>
              "The year 2022 saw the birth of Treeman. The motto was to
              bringing the benefits of green makeovers, Tree services, and
              delivering quality plants to greater heights. To every
              doorstep as they say."
            </p>
          </div>
        </div>
        <div className="cards-column">
          <div className="card_">
            <div className="card-icon">★</div>
            <h3>Expert Care</h3>
            <p>
              Your plants are as living as humans, and need a lot of love
              and care. In the hands of our experts, your plants are safe
              and will grow healthy.
            </p>
          </div>
          <div className="card_">
            <div className="card-icon">🛠</div>
            <h3>Craftsmanship</h3>
            <p>
              We at Treeman are proud to offer carefully designed
              landscapes crafted to suit our commercial clients' preferences
              while prioritizing sustainability.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">😊</div>
            <h3>Customer Satisfaction</h3>
            <p>
              We deliver satisfaction through our comprehensive range of
              expert landscaping services, including both residential and
              commercial landscaping.
            </p>
          </div>
        </div>
      </div>
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