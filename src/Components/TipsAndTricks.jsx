import React from 'react';
import '../Style/TipsAndTricks.css';

const TipsAndTricks = () => {
  return (
    <section className="tips-and-tricks">
      <h1 className="title">Tips & Tricks</h1>
      <p className="subtitle">Expert advice and insights for your gardening journey</p>
      <div className="cards-container">
        <div className="card_x">
          <img
            src="./Images/org.jpg"
            alt="Organic Farming"
            className="card-image"
          />
          <div className="card-content_x">
            <h3 className="card-title">Organic Farming</h3>
            <p className="card-desc">
              Discover the benefits of organic farming, from healthier produce to sustainable
              practices. Learn about natural pest control, crop rotation, and livestock
              management.
            </p>
            <div className="card-tags">
              <span>Natural Crops</span>
              <span>Soil Health</span>
              <span>Sustainability</span>
            </div>
          </div>
        </div>

        <div className="card_x">
          <img
            src="./Images/org2.jpg"
            alt="Miniature Zen Garden"
            className="card-image"
          />
          <div className="card-content_x">
            <h3 className="card-title">Miniature Zen Garden</h3>
            <p className="card-desc">
              Create your own peaceful sanctuary with a miniature Zen garden. Learn about
              traditional elements, symbolism, and how to incorporate natural materials.
            </p>
            <div className="card-tags">
              <span>Serene</span>
              <span>Tranquil</span>
              <span>Zen</span>
            </div>
          </div>
        </div>

        <div className="card_x">
          <img
            src="./Images/org3.jpg"
            alt="Balcony Garden"
            className="card-image"
          />
          <div className="card-content_x">
            <h3 className="card-title">Balcony Garden</h3>
            <p className="card-desc">
              Transform your balcony into a green oasis. Get tips on plant selection, space
              optimization, and creating a natural habitat in urban settings.
            </p>
            <div className="card-tags">
              <span>Urban Gardening</span>
              <span>Indoor Plants</span>
              <span>Small Spaces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
