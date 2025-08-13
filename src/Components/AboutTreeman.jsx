import React from "react";
import "../Style/AboutTreeman.css";
import { FaLightbulb, FaHandshake, FaLeaf, FaBolt } from "react-icons/fa";
import AboutSection from "./AboutSection";

const AboutTreeman = () => {
  const coreValues = [
    {
      icon: <FaLightbulb />,
      title: "Expert Craftsmanship",
      description:
        "Our certified horticulturist and landscaping professionals bring years of experience and dedication to every project.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Focus",
      description:
        "We prioritize your satisfaction, delivering personalized solutions that exceed expectations and create lasting relationships.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "Our commitment to environmental responsibility drives us to implement eco-friendly practices in every service we provide.",
    },
    {
      icon: <FaBolt />,
      title: "Innovation",
      description:
        "We stay at the forefront of arboriculture and landscaping technology to provide the most effective solutions.",
    },
  ];

  return (
    <section className="about-details">
  
   <AboutSection/>


      <h2 className="core-values-title">Our Core Values</h2>
      <div className="core-values-container">
        {coreValues.map((value, index) => (
          <div key={index} className="core-value-card">
            <div className="icon">{value.icon}</div>
            <h4>{value.title}</h4>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTreeman;
