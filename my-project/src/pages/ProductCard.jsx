// ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = () => {
  // Array of product data
  const products = [
    {
      id: 1,
      title: "Smart Watch Pro",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      video: "https://media.istockphoto.com/id/2180301062/video/colorful-handmade-souvenirs-for-sale-in-street-market-in-village-sapa-vietnam.mp4?s=mp4-480x480-is&k=20&c=OA1-unzd3XYmcINK-cbTqVN-a-7MoOM8ESeafYWw1B4="
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      video: "https://media.istockphoto.com/id/1397880473/video/businesswoman-using-phone-and-walking-to-work-in-modern-city.mp4?s=mp4-640x640-is&k=20&c=jXXWO-72M9Q9RIlcYBdeXAsuDrSZqaXQ5iFlK0EI2PY="
    },
    {
      id: 3,
      title: "Smartphone X",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      video: "https://media.istockphoto.com/id/1137534609/video/young-male-entrepreneur-working-on-the-digital-tablet-while-walking-along-the-modern-business.mp4?s=mp4-640x640-is&k=20&c=AIXzsNgDE97bNQT5jIg8vgFJjAJlTZUBNnKUG0laeNU="
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCardItem key={product.id} product={product} />
      ))}
    </div>
  );
};

// Separate component for individual product card
const ProductCardItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden relative transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video Container */}
      <div className="relative w-full h-3/4">
        {/* Image - shown when not hovered */}
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Video - shown when hovered */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={product.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Product Title */}
      <div className="p-4 h-1/4 flex items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {product.title}
        </h3>
      </div>

      {/* Optional Overlay Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
    </div>
  );
};

export default ProductCard;