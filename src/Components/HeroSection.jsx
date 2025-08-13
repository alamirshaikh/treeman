import React, { useEffect, useState } from "react";
import "../Style/HeroSection.css";

const HeroSection = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    let yInterval = setInterval(() => {
      setYears((prev) => {
        if (prev < 20) return prev + 1;
        clearInterval(yInterval);
        return prev;
      });
    }, 50);

    let pInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 1000) return prev + 20;
        clearInterval(pInterval);
        return prev;
      });
    }, 10);

    let sInterval = setInterval(() => {
      setSatisfaction((prev) => {
        if (prev < 100) return prev + 2;
        clearInterval(sInterval);
        return prev;
      });
    }, 30);
  }, []);

  return (
    <section className="hero container">
      <div className="hero-content">
        {/* Tagline */}
        <div className="tagline">
          <span className="dot"></span>
          Treeman Services - Your Trusted Tree Care Partner
        </div>

        {/* Main Heading */}
        <h1 className="section-titles">Mumbai's Premier Tree Care Specialists</h1>

        {/* Description */}
        <p className="section-page">
          Experience excellence in tree care with our dedicated team,
          state-of-the-art equipment, and round-the-clock service for all your
          landscaping needs.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="/contact" className="btn primary">
            Get Free Quote →
          </a>
          <a href="/services" className="btn secondary">
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat">
            <h3>{years}+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>{projects}+</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat">
            <h3>{satisfaction}%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="hero-images">
        <img src="./Images/green1.jpg" alt="Tree Cutting" />
        <img src="./Images/green2.png" alt="Garden Bushes" />
        <img src="./Images/green3.jpg" alt="Tree Pruning" />
        <img src="./Images/green4.jpg" alt="Landscape Garden" />
      </div>
    </section>
  );
};

export default HeroSection;
