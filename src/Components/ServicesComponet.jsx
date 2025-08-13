import React from 'react';
import "../Style/ServicesComponet.css";
import landscapeImg from "../assets/landscaping.jpg";
import ecofriendlyImg from "../assets/eco-friendly.jpg";
import commercialImg from "../assets/commercial.jpg";
import maintenanceImg from "../assets/maintenance.jpg";
import hardscapingImg from "../assets/hardscaping.jpg";
import terraceImg from "../assets/terrace.jpg";
import TramsplatImg from "../assets/tree-transplantation.jpg";
import CutImg from "../assets/tree-cutting.jpg"

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
    title: "Commercial Space Beautification",
    description: "Enhancing outdoor spaces of commercial properties, blending functionality with aesthetic appeal for a professional look.",
    items: ["Professional Design", "Commercial Solutions", "Aesthetic Enhancement"],
    image: commercialImg,
  },
  {
    key: "terrace3",
    title: "Eco-Friendly Garden Designs",
    description: "Implementing sustainable garden designs that prioritize native plants and resource-efficient techniques, reducing environmental impact.",
    items: ["Native Plants", "Sustainable Design", "Resource Efficiency"],
    image: ecofriendlyImg,
  },
  {
    key: "terrace4",
    title: "Tree Transplantation",
    description: "Relocating trees with minimal root stress, ensuring a high success rate in new tree establishment.",
    items: ["Careful Relocation, Root Protection", "Post-move Care"],
    image: TramsplatImg,
  },
  {
    key: "terrace5",
    title: "Tree Cutting and Removal",
    description: "Safe and efficient removal of hazardous or unwanted trees using advanced tools for precision and safety",
    items: ["Safe Removal", "Advanced Tools", "Complete Cleanup"],
    image: CutImg,
  },
];

const ServicesComponet = () => {
  return (
    <section className="services">
      <div className="services__container">
        <header className="services__header">
          <h2>Our Professional Services</h2>
          <p>Treeman Services offers a comprehensive range of landscaping solutions that cater to diverse client needs. Our expertise ensures that every space reflects the client's vision while prioritizing sustainability.</p>
        </header>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.key} className="card">
              <div className="card__image-wrapper">
                <img src={service.image} alt={service.title} className="card__image" />
              </div>
              <div className="card__content">
                <h3 className="card__title">{service.title}</h3>
                <p className="card__description">{service.description}</p>
                <ul className="card__list">
                  {service.items.map((item) => (
                    <li key={item} className="card__item">{item}</li>
                  ))}
                </ul>
                <a href="/contact" className="card__cta">Learn More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponet;
