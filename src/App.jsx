import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import ServicesNew from "./Pages/ServicesNew";
import Contact from "./Pages/Contact";
import Product from "./Pages/Products";

function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Treeman Services - Expert Tree Care & Maintenance in Mumbai";
        break;
      case "/gallery":
        document.title = "Gallery - Treeman Services";
        break;
      case "/about":
        document.title = "About Us - Treeman Services";
        break;
      case "/services":
        document.title = "Our Services - Treeman Services";
        break;
      case "/products":
        document.title = "Products - Treeman Services";
        break;
      case "/contact":
        document.title = "Contact Us - Treeman Services";
        break;
      default:
        document.title = "Treeman Services";
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesNew />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
