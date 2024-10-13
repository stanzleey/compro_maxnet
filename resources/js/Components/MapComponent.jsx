import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const MapComponent = () => {
  useEffect(() => {
    // Inisialisasi peta
    const map = L.map("map").setView([-6.200000, 106.816666], 13); // Lokasi awal di Jakarta

    // Tambahkan tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Marker untuk tiang
    const poleMarker = L.marker([-6.200000, 106.816666]).addTo(map)
      .bindPopup("Lokasi Tiang");

    // Marker untuk rumah pelanggan
    const customerMarker = L.marker([-6.210000, 106.826666]).addTo(map)
      .bindPopup("Rumah Pelanggan");

    // Tambahkan routing machine
    L.Routing.control({
      waypoints: [
        L.latLng(-6.200000, 106.816666), // Lokasi tiang
        L.latLng(-6.210000, 106.826666), // Lokasi rumah pelanggan
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }],
      },
      show: false,
    }).addTo(map);

  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
