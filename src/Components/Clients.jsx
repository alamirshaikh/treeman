import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style/Client.css"; // Your custom styles

const Clients = () => {
  const clientImagesRow1 = [
    "./Images/1.png",
    "./Images/2.png",
    "./Images/3.png",
    "./Images/4.png",
    "./Images/5.png",
    "./Images/6.png",
    "./Images/7.png",
    "./Images/8.png",
    "./Images/9.png",
    "./Images/10.png"

 
  ];
 
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,  // Smooth transition speed
      autoplay: true,
      autoplaySpeed: 0, // No delay between transitions
      slidesToScroll: 1,
      pauseOnHover: false,
      cssEase: "linear", // Ensures seamless scrolling
      slidesToShow: 3, // Default for large screens
       
    responsive: [
      {
        breakpoint: 1600, // Extra-large screens (TVs, 4K monitors)
        settings: {
          slidesToShow: 3, // Show 6 images per slide
        }
      },
      {
        breakpoint: 1400, // Large desktop screens
        settings: {
          slidesToShow: 3, // Show 5 images per slide
        }
      },
      {
        breakpoint: 1024, // Laptops and normal desktops
        settings: {
          slidesToShow: 3, // Show 4 images per slide
        }
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 images per slide
        }
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1, // Show 1 image per slide
        }
      }
    ]
  };

  return (
    <div id="clients" className="clients">
      <div className="container">
        <h2>Our Clients</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {clientImagesRow1.map((image, index) => (
              <div key={index} className="slide-item">
                <img src={image} alt={`Client ${index + 1}`} className="client-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
