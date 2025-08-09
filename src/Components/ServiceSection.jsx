import React from "react";
import "../Style/ServiceSection.css";

const servicesData = [
  {
    image: "./Images/garden1.jpg",
    icon: "",
    title: "Garden/Urban",
    description:
      "We provide expert garden design and maintenance, from potted plants to complete garden makeovers.",
    points: ["Garden Design", "Garden Maintenance", "Garden Makeovers"]
  },
  {
    image: "./Images/garden2.webp",
    icon: "./Images/real_touch.png",
    title: "Artificial Real Touch Plants",
    description:
      "We provide artificial plants and trees for your garden or landscape.",
    points: ["Artificial Plants", "Artificial Trees", "Artificial Flowers"]
  },
  {
    image: "./Images/garden3.jpg",
    icon: "⚙️",
    title: "Maintenance",
    description:
      "Regular care and maintenance to keep your plants healthy and thriving.",
    points: ["Regular Care", "Health Monitoring", "Plant Nutrition"]
  },
  {
    image: "./Images/garde4.jpg",
    icon: "✨",
    title: "FRP Planters",
    description:
      "FRP planters are a great way to add a touch of elegance to your garden or landscape.",
    points: ["High-quality", "Durable", "Customizable"]
  }
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
        <img src="./Images/logo.png" alt="Logo" className="logo" />

        <h1 className="section-title">
          Transforming Spaces Naturally
        </h1>

        <p className="subtitle">
          Treeman Services offers a comprehensive range of landscaping solutions
          that cater to diverse client needs. Our expertise in landscape design
          and installation ensures that every space reflects the client's vision
          while prioritizing sustainability.
          <p class="text_lg">From design to maintenance, we're here for you.</p>

        </p>
 
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <div className="service-content">
                <div className="icon"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
