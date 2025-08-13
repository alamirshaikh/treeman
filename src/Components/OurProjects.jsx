import React, { useState } from "react";
import "../Style/OurProjects.css";

const allProjects = [
  {
    title: "Tree Transplantation Project",
    description:
      "Successful relocation of mature trees in Mumbai residential area",
    tags: ["Tree Care", "Transplantation", "Residential"],
    img: "../Gallary/gallery-1.jpg",
  },
  {
    title: "Modern Garden Design",
    description:
      "Contemporary landscape design for luxury apartment complex",
    tags: ["Landscape", "Modern", "Design"],
    img: "../Gallary/gallery-2.jpg",
  },
  {
    title: "Urban Balcony Transformation",
    description:
      "Space-efficient vertical garden installation for urban home",
    tags: ["Urban", "Vertical Garden", "Small Space"],
    img: "../Gallary/gallery-3.jpg",
  },
  {
    title: "Commercial Tree Maintenance",
    description:
      "Regular maintenance program for corporate campus trees",
    tags: ["Commercial", "Maintenance", "Tree Health"],
    img: "../Gallary/gallery-4.jpg",
  },
  {
    title: "Zen Garden Creation",
    description: "Japanese-inspired garden design with meditation space",
    tags: ["Garden Design", "Zen","Peaceful"],
    img: "../Gallary/gallery-5.jpg",
  },
  {
    title: "Tree Health Recovery",
    description: "Successful treatment and recovery of diseased heritage trees",
    tags: ["Tree Health", "Treatment","Heritage"],
    img: "../Gallary/gallery-6.webp",
  },
  {
    title: "Rooftop Garden Installation",
    description: "Complete rooftop transformation with sustainable features",
    tags: ["Rooftop", "Urban Garden", "Sustainable"],
    img: "../Gallary/gallery-7.jpg",
  },
  {
    title: "Native Plant Garden",
    description: "Eco-friendly garden featuring local plant species",
    tags: ["Native Plants", "Eco-friendly", "Sustainable"],
    img: "../Gallary/gallery-8.webp",
  },
  {
    title: "Corporate Landscape Design",
    description: "Modern landscape design for tech park entrance",
    tags: ["Corporate", "Design", "Modern"],
    img: "../Gallary/gallery-9.jpg",
  },
];

// Filter → project indexes
const filterMap = {
  "All Projects": [0, 1, 2, 3, 4, 5, 6, 7,8],
  "Tree Care": [0,3, 5],
  Landscaping: [1, 8],
  "Garden Design": [4,7],
  "Urban Projects": [2, 6],
};

// Button labels
const filterOptions = Object.keys(filterMap);

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = filterMap[activeFilter].map(
    (index) => allProjects[index]
  );

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Our Project Gallery</h2>
        <p>
          Explore our portfolio of transformative projects and successful
          implementations
        </p>
      </div>

      <div className="gallery-filters">
        {filterOptions.map((btn) => (
          <button
            key={btn}
            className={`filter-btn ${activeFilter === btn ? "active" : ""}`}
            onClick={() => setActiveFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* ✅ Fixed layout so 1–2 cards are still centered */}
      <div className="gallery-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="gallery-card">
            <img src={p.img} alt={p.title} />
            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="card-tags">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
