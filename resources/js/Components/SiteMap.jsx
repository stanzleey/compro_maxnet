import React, { useEffect } from 'react';
import L from 'leaflet';

const SiteMap = ({ siteLocation }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([siteLocation.lat, siteLocation.lng], 15);

    // Add the base tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker for the site location
    const siteMarker = L.marker([siteLocation.lat, siteLocation.lng]).addTo(map)
      .bindPopup(`<b>${siteLocation.name}</b><br>${siteLocation.address}`).openPopup();

    // Calculate and draw a 300m radius circle around the site
    const siteCircle = L.circle([siteLocation.lat, siteLocation.lng], {
      color: 'blue',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 300 // 300 meters
    }).addTo(map);

    // Add click event to show coordinates of clicked location (customer location)
    map.on('click', function (e) {
      const { lat, lng } = e.latlng;

      // Calculate distance between customer location and site
      const distance = map.distance([lat, lng], [siteLocation.lat, siteLocation.lng]);

      L.marker([lat, lng]).addTo(map)
        .bindPopup(`Customer Location<br>Distance to Site: ${distance.toFixed(2)} meters`)
        .openPopup();
    });

    return () => {
      map.remove(); // Cleanup map instance on unmount
    };
  }, [siteLocation]);

  return (
    <div>
      <h4>Map of Site and Customer Locations</h4>
      <div id="map" style={{ height: '400px' }}></div>
    </div>
  );
};

export default SiteMap;
