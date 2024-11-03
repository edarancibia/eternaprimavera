import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  const message = "Hola, estoy interesado en más información sobre sus servicios.";

  console.log(phoneNumber)

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center z-[1000]" 
      style={{ transform: "translateX(-50%)" }}
      aria-label="Chat en WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default FloatingWhatsAppButton;
