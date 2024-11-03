import React from "react";

const galleryImages = [
  "/assets/corazon-noche.jpg",
  "/assets/exterior1.jpeg",
  "/assets/corazon-dia.jpeg",
  "/assets/interior.jpeg",
  "/assets/corazon-dia2.jpeg",
  "/assets/parque1.jpeg",
  "/assets/banios.jpg",
];

const Gallery: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Galería de Fotos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
