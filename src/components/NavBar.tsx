import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#002a30] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          Centro de Eventos Eterna Primavera
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#inicio" className="hover:text-gray-300">Inicio</a>
          <a href="#servicios" className="hover:text-gray-300">Servicios</a>
          <a href="#galeria" className="hover:text-gray-300">Galería</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
