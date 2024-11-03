// src/components/Carousel.tsx
import React, { useEffect, useState } from 'react';

const images = [
  "/assets/corazon-dia.jpeg",
  "/assets/exterior1.jpeg",
  "/assets/interior.jpeg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-90 md:h-[500px] overflow-hidden relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
