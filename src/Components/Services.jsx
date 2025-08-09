import React, { useState } from 'react';
import "../Style/Services.css";

import landscapeImg from "../assets/landscaping.jpg";
import maintenanceImg from "../assets/maintenance.jpg";
import hardscapingImg from "../assets/hardscaping.jpg";
import terraceImg from "../assets/terrace.jpg";
const services = [
  {
    key: "landscape",
    title: "Landscape Design and Installation",
    description: "Specializing in designing and installing aesthetically pleasing landscapes.",
    items: ["Custom Design Plans", "Professional Installation", "Sustainable Solutions"],
    image: landscapeImg,
  },
  {
    key: "maintenance",
    title: "Regular Maintenance and Lawn Care",
    description: "Providing ongoing maintenance, lawn care, and arborist services.",
    items: ["Regular Maintenance", "Lawn Care Services", "Year-round Care"],
    image: maintenanceImg,
  },
  {
    key: "hardscaping",
    title: "Hardscaping and Outdoor Living",
    description: "Creating durable outdoor structures like patios, walkways, and terraces.",
    items: ["Patio Design", "Walkway Installation", "Terrace Construction"],
    image: hardscapingImg,
  },
  {
    key: "terrace1",
    title: "Terrace Transformation",
    description: "Successfully transforming terraces into lush green oases.",
    items: ["Modern Design", "Low-maintenance Plants", "Space Optimization"],
    image: terraceImg,
  },
  {
    key: "terrace2",
    title: "Terrace Makeover",
    description: "Elegant designs for maximizing small spaces.",
    items: ["Stylized Planting", "Compact Furniture", "Ambient Lighting"],
    image: terraceImg,
  },
  {
    key: "terrace3",
    title: "Terrace Garden",
    description: "Lush gardens designed for rooftops and balconies.",
    items: ["Vertical Gardens", "Herb Beds", "Drainage Solutions"],
    image: terraceImg,
  },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const chunks = chunkArray(services, 4);

  return (
    <section className="services">
      <div className="services__container">
        <header className="services__header">
          <h2>Our Services</h2>
          <p>Comprehensive tree care solutions for every need.</p>
        </header>

        <div className="services__grid">
          {chunks[currentPage].map((service) => (
            <article key={service.key} className="card">
              <div className="card__image-wrapper">
                <img src={service.image} alt={service.title} className="card__image" />
                <div className="card__overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              <ul className="card__list">
                {service.items.map((item) => (
                  <li key={item} className="card__item">{item}</li>
                ))}
              </ul>
              <a href="#" className="card__cta">Learn More</a>
            </article>
          ))}
        </div>

        <div className="services__navigation">
          {currentPage > 0 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>← Previous</button>
          )}
          {currentPage < chunks.length - 1 && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next →</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
