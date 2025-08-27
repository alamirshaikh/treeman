import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style/Client.css"; // Your custom styles

const ProductsSlid = () => {
  // Images with names
  const clientProducts = [
    { img: "/Products/1.png", name: "Landscape Tools" },
    { img: "/Products/2.png", name: "Garden Soil" },
    { img: "/Products/3.png", name: "Fertilizers" },
    { img: "/Products/4.png", name: "Irrigation Systems" },
    { img: "/Products/5.png", name: "Plant Pots" },
    { img: "/Products/6.png", name: "Organic Seeds" },
    { img: "/Products/7.png", name: "Garden Lights" },
    { img: "/Products/8.png", name: "Tree Care Equipment" },
    { img: "/Products/9.png", name: "Shrubs & Plants" },
    { img: "/Products/10.png", name: "Decorative Stones" },
  ];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div id="clients" className="clients">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {clientProducts.map((product, index) => (
              <div key={index} className="slide-item">
                <div className="product-card">
                  <img src={product.img} alt={product.name} className="client-image" />
                  <p className="product-name">{product.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlid;
