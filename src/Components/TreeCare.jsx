import React from "react";
import "../Style/TreeCare.css";
import { FaClock, FaCheckCircle, FaUsers, FaSmile } from "react-icons/fa";

const TreeCare = () => {
  const stats = [
    { icon: <FaClock />, value: "20+", label: "Years of Experience" },
    { icon: <FaCheckCircle />, value: "1000+", label: "Projects Completed" },
    { icon: <FaUsers />, value: "20+", label: "Expert Team Members" },
    { icon: <FaSmile />, value: "1000+", label: "Happy Clients" },
  ];

  return (
    <section className="about-section">
      <h2 className="about-title">About Treeman Services</h2>
      <p className="about-subtitle">
        Your trusted partner in professional tree care and landscaping solutions since 2022
      </p>

      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{item.icon}</div>
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreeCare;
