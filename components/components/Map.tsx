"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    import("leaflet").then((L) => {
      // Fix voor Leaflet iconen (dit zorgt dat de marker goed wordt weergegeven)
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Initialiseer de kaart met centrum op Nijkerk, zoomniveau 12
      const map = L.map(mapRef.current!).setView([52.2233, 5.4868], 12);

      // Voeg de kaart tiles toe (OpenStreetMap via Carto)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // Voeg een marker toe met een popup
      L.marker([52.2233, 5.4868])
        .addTo(map)
        .bindPopup("<strong>D.T.G. Cleaning</strong><br />Nijkerk & Putten")
        .openPopup();
    });
  }, []);

  return <div ref={mapRef} className="w-full h-80 rounded-xl" />;
}
