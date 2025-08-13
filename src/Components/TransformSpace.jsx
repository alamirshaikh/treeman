import React from 'react';
import { useNavigate } from "react-router-dom";

import '../Style/TransformSpace.css'; // Assuming you'll create a separate CSS file

 

const TransformSpace = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // replace with your target route
  };
  return (
    <section className="transform-space">
      <h1 className="title">Ready to Transform Your Space?</h1>
      <p className="subtitle">Contact us today for a personalized consultation</p>
      <button onClick={handleClick} className="get-started-btn">Get Started Today →</button>
    </section>
  );
};

export default TransformSpace;