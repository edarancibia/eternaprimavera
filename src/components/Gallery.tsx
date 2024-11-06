import React, { useState } from "react";

const galleryImages = [
  "./assets/corazon-noche.jpg",
  "./assets/exterior1.jpeg",
  "./assets/corazon-dia.jpeg",
  "./assets/interior.jpeg",
  "./assets/corazon-dia2.jpeg",
  "./assets/parque1.jpeg",
  "./assets/banios.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Galería de Fotos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>

      {/* Lightbox para la imagen seleccionada */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleClose}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Ampliada"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
