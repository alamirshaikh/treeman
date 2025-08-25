import React from 'react';
import '../Style/OurPorducts.css';

// All products in one array
const products = [
  {
    img: "./Products/1.png",
    alt: "Modern Cube Planter",
    title: "Modern Cube Planter",
    desc: "A sleek white cube planter with clean, minimalistic lines, perfect for modern interiors or office spaces. Its solid square design gives stability and a bold presence.",
    tags: ["Modern", "Minimalist", "Indoor/Office"]
  },
  {
    img: "./Products/4.png",
    alt: "Contemporary Cone Planter",
    title: "Contemporary Cone Planter",
    desc: "A stylish white cone-shaped planter with a wide base and narrow top, ideal for indoor plants. Its smooth curves add elegance to living rooms, lobbies, or terraces.",
    tags: ["Stylish", "Elegant", "Indoor/Outdoor"]
  },
  {
    img: "./Products/5.png",
    alt: "Tall Twin Tower Planters",
    title: "Tall Twin Tower Planters",
    desc: "A pair of tall rectangular planters designed for outdoor and patio decoration. Their vertical shape makes them excellent for plants with long leaves or ornamental shrubs.",
    tags: ["Outdoor", "Patio", "Tall Design"]
  },
  {
    img: "./Products/6.png",
    alt: "Slim Tapered Planter",
    title: "Slim Tapered Planter",
    desc: "A tall, narrow, and slightly tapered white planter that brings sophistication to any space. Great for hallways, corners, or modern offices.",
    tags: ["Slim", "Sophisticated", "Indoor"]
  },
  {
    img: "./Products/7.png",
    alt: "Rectangular Trough Planter",
    title: "Rectangular Trough Planter",
    desc: "A large rectangular white planter box, perfect for creating a row of greenery indoors or outdoors. Works well for partitioning spaces with natural elements.",
    tags: ["Partition", "Row Planting", "Indoor/Outdoor"]
  },
  {
    img: "./Products/8.png",
    alt: "Elegant Corner Planter",
    title: "Elegant Corner Planter",
    desc: "A chic, tapered white planter with a slim design, ideal for corners, entryways, or small balconies. Its shape saves space while maintaining style.",
    tags: ["Corner", "Balcony", "Space Saver"]
  },
  {
    img: "./Products/9.png",
    alt: "Minimalist Fern Planter",
    title: "Minimalist Fern Planter",
    desc: "A modern rectangular planter in a clean matte white finish, best for ferns or leafy greens. Its simple design complements tiled and wooden flooring.",
    tags: ["Minimalist", "Ferns", "Indoor"]
  },
  {
    img: "./Products/10.png",
    alt: "Globe Sphere Planter",
    title: "Globe Sphere Planter",
    desc: "A unique round white planter with a smooth matte finish. Its spherical shape makes it an eye-catching piece for contemporary homes or luxury spaces.",
    tags: ["Round", "Luxury", "Statement Piece"]
  },
  {
    img: "./Products/11.png",
    alt: "Modern Rectangular Indoor Planter",
    title: "Modern Rectangular Indoor Planter",
    desc: "A sleek, minimalist rectangular planter in matte white finish, designed to complement contemporary interiors. Ideal for grouping lush indoor plants in living rooms or offices.",
    tags: ["Indoor", "Rectangular", "Contemporary"]
  },
  {
    img: "./Products/12.png",
    alt: "Tall Slim Indoor Planter",
    title: "Tall Slim Indoor Planter",
    desc: "This tall, slim indoor planter features a clean and modern white facade. Perfect for space-saving plant displays, especially in corners or narrow areas.",
    tags: ["Slim", "Vertical", "Space Saver"]
  },
  {
    img: "./Products/13.png",
    alt: "The Duo Cylindrical Planters",
    title: "The Duo Cylindrical Planters",
    desc: "A pair of cylindrical planters in bold, contrasting colors. Perfect for bringing a playful touch to your decor.",
    tags: ["Cylindrical", "Colorful", "Playful"]
  },
  {
    img: "./Products/14.png",
    alt: "The Serenity Round Planter",
    title: "The Serenity Round Planter",
    desc: "This classic round planter offers a soft, elegant touch to any room or patio. Its generous, low-profile shape is perfect for lush, leafy plants.",
    tags: ["Round", "Classic", "Elegant"]
  },
  {
    img: "./Products/15.png",
    alt: "The Modernist Square Planter",
    title: "The Modernist Square Planter",
    desc: "A sleek and contemporary square planter designed for both indoor and outdoor spaces. Its clean lines make it a versatile decor piece.",
    tags: ["Square", "Modern", "Versatile"]
  },
  {
    img: "./Products/16.png",
    alt: "The Statement Rectangular Planter",
    title: "The Statement Rectangular Planter",
    desc: "This tall, slim rectangular planter makes a statement in any corner or beside furniture. Its height adds a vertical element to your decor.",
    tags: ["Rectangular", "Tall", "Indoor/Outdoor"]
  },
  {
    img: "./Products/20.png",
    alt: "The Vibrant Tapered Planter",
    title: "The Vibrant Tapered Planter",
    desc: "A bold and eye-catching planter with a unique tapered design. Perfect for highlighting a single striking plant indoors or outdoors.",
    tags: ["Tapered", "Bold", "Indoor/Outdoor"]
  },
  {
    img: "./Products/21.png",
    alt: "The Ovoid Planter",
    title: "The Ovoid Planter",
    desc: "An elegant, egg-shaped planter that adds a soft, organic touch. Perfect for tall foliage or sprawling leaves.",
    tags: ["Egg Shape", "Organic", "Elegant"]
  },
  {
    img: "./Products/22.png",
    alt: "The Grande Cube Planter",
    title: "The Grande Cube Planter",
    desc: "A large, geometric planter with a clean, square-edged design. Ideal as a visual anchor in a room or patio.",
    tags: ["Large", "Cube", "Modern"]
  },
  {
    img: "./Products/25.png",
    alt: "The Serene Buddha Planter",
    title: "The Serene Buddha Planter",
    desc: "A unique planter shaped like the head of Buddha, offering a peaceful and contemplative aesthetic.",
    tags: ["Spiritual", "Unique", "Decorative"]
  },
  {
    img: "./Products/27.png",
    alt: "The Mini Cube Planters",
    title: "The Mini Cube Planters (Set of 2)",
    desc: "A set of two small, square planters perfect for succulents, herbs, or small decorative plants.",
    tags: ["Mini", "Succulents", "Set"]
  },
  {
    img: "./Products/29.png",
    alt: "The Ruby Red Duo",
    title: "The Ruby Red Duo",
    desc: "A pair of glossy red planters including a tall cylindrical vase and a wide bowl-shaped planter. Adds a luxurious touch to interiors.",
    tags: ["Red", "Luxury", "Glossy"]
  },
  {
    img: "./Products/31.png",
    alt: "The Urban Cylinder Planter",
    title: "The Urban Cylinder Planter",
    desc: "A sleek cylindrical planter with a modern matte grey finish. Perfect for medium to large plants, blending with minimalist and industrial interiors.",
    tags: ["Cylinder", "Grey", "Modern"]
  },
  // 👉 You can continue adding all missing numbers in same format
];

const OurPorducts = () => {
  return (
    <section className="tips-and-tricks_our">
      <h1 className="title_our">Our Products</h1>
      <p className="subtitle_our">Explore our full planter collection</p>
      
      <div className="cards-container_our">
        {products.map((item, index) => (
          <div key={index} className="card_x_our">
            <img src={item.img} alt={item.alt} className="card-image_our" />
            <div className="card-content_x_our">
              <h3 className="card-title_our">{item.title}</h3>
              <p className="card-desc_our">{item.desc}</p>
              <div className="card-tags_our">
                {item.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPorducts;
