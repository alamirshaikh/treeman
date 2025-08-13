import React from "react";
import "../Style/AboutSection.css";
const gardenImage = "../Images/landscaping.jpg"; // adjust path

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={gardenImage} alt="Vision and Mission" className="about-image" />
        <div className="vision-box">
          <h4>Vision and Mission</h4>
          <p>
            "To redefine outdoor spaces by merging sustainability, creativity,
            and functionality to transform landscapes into living masterpieces."
          </p>
        </div>
      </div>

      <div className="about-right">
        <h2>Where Nature Meets Artistry</h2>
        <p>
        Founded in March 2022, Treeman Services Pvt Ltd blends a profound love for nature with the expertise of over two decades in the landscaping industry.

Treeman Services Private Limited was established with a vision to blend nature and artistry in landscaping. Our journey began in 2022, fueled by a team of seasoned professionals with a shared passion for transforming outdoor spaces into sustainable and aesthetically pleasing environments.
        </p>

        <div className="founder-box">
          <h4>Our Founders</h4>
          <p>
          Treeman is led by industry veterans who are passionate about the transformative power of nature, ensuring every project reflects their deep-rooted commitment to excellence. Our founders, with over 20 years of experience, bring a wealth of knowledge in landscape design, installation, and maintenance, ensuring that every project is not just about beauty but also about creating harmony between nature and human spaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
