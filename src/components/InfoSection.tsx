import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconRetinaUrl,
  shadowUrl: shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const InfoSection: React.FC = () => {
  const businessLocation = { lat: -40.591522, lng: -72.955814 };

  return (
    <div className="bg-beige-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Video de YouTube */}
        <div className="aspect-w-16 aspect-h-9 h-64 md:h-96 col-span-1">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/mhkjQhU4x6I?si=loQb5cFdeBzykWp5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        {/* Sección de Información */}
        <div className="flex flex-col justify-center p-6 h-64 md:h-96 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Centro de Eventos</h2>
          <p className="text-lg text-gray-700">
            Ubicado a orilla de carretera por ruta 215 km 13. Casamientos, cumpleaños, bautizos, paseos de colegios, etc.
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            PROMOCIÓN: $100.000 de lunes a miércoles de 12 a 8 PM hrs.
          </p>
        </div>

        {/* Mapa de Ubicación en la misma fila */}
        <div className="col-span-1 md:col-span-1 h-64 md:h-96 rounded overflow-hidden shadow-lg z-10">
          <MapContainer
            center={businessLocation}
            zoom={15}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={businessLocation} icon={defaultIcon}>
              <Popup>Centro de Eventos Eterna Primavera</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
