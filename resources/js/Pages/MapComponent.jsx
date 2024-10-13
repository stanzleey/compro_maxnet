import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '@/Components/Frontpage/Footer';
import Header from '@/Components/Header';
import { Inertia } from '@inertiajs/inertia';

export default function Lokasi() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [locations, setLocations] = useState([]);
  const [polygon, setPolygon] = useState(null);
  const [distance, setDistance] = useState(0);
  const [nearestLocation, setNearestLocation] = useState(null);

  const [formData, setFormData] = useState({
    coordinates: '',
    totalDistance: '',
    totalPrice: 0,
    detailedAddress: '',
  });

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/sites');
      const data = await response.json();
      const processedLocations = data.map(site => {
        const coordinates = site.site_location_maps.split(',');
        return {
          site_name: site.site_name,
          site_address: site.site_address,
          lat: parseFloat(coordinates[0]),
          lon: parseFloat(coordinates[1]),
        };
      });
      setLocations(processedLocations);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handleSearch = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    if (query.length > 2) {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectLocation = async (lat, lon, displayName) => {
    if (!lat || !lon) {
      toast.error('Koordinat tidak valid');
      return;
    }

    const selectedCoords = [lat, lon];
    map.setView(selectedCoords, 13);
    if (marker) {
      map.removeLayer(marker);
    }

    const newMarker = L.marker(selectedCoords).addTo(map).bindPopup(displayName).openPopup();
    setMarker(newMarker);
    if (polygon) {
      map.removeLayer(polygon);
    }

    const radius = 300;
    const newPolygon = L.circle(selectedCoords, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: radius,
    }).addTo(map);
    setPolygon(newPolygon);

    let nearestDistance = Infinity;
    let nearestLocation = null;

    locations.forEach((location) => {
      if (location.lat && location.lon) {
        const providerLatLng = L.latLng(location.lat, location.lon);
        const selectedLatLng = L.latLng(lat, lon);
        const distanceToProvider = providerLatLng.distanceTo(selectedLatLng);
        if (distanceToProvider < nearestDistance) {
          nearestDistance = distanceToProvider;
          nearestLocation = location;
        }
      }
    });

    if (nearestLocation) {
      setDistance(nearestDistance);
      setNearestLocation(nearestLocation);

      const totalPrice = Math.min(nearestDistance, radius) * 2000; // Calculate total price (Rp 2000 per meter)

      setFormData({
        coordinates: [lat, lon],
        totalDistance: nearestDistance.toFixed(2),
        totalPrice: totalPrice,
        detailedAddress: displayName,
      });

      if (nearestDistance > 300) {
        toast.error(`Lokasi terdekat: ${nearestLocation.site_name}, Jarak: ${nearestDistance.toFixed(2)} meter (Terlalu Jauh!)`, {
          style: {
            background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
            color: '#fff',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
          },
        });
      } else {
        toast.success(`Lokasi terdekat: ${nearestLocation.site_name}, Jarak: ${nearestDistance.toFixed(2)} meter`, {
          style: {
            background: 'linear-gradient(45deg, #56ab2f, #a8e063)',
            color: '#fff',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
          },
        });
      }
    } else {
      toast.error('Tidak ada lokasi provider terdekat.', {
        style: {
          background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
          color: '#fff',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
        },
      });
    }

    setSearchResults([]);
  };

  useEffect(() => {
    if (map && locations.length > 0) {
      locations.forEach((location) => {
        if (location.lat && location.lon) {
          const latLng = [location.lat, location.lon];
          // L.marker(latLng, { icon: L.icon({ iconUrl: '/img/icon1.png', iconSize: [25, 41], iconAnchor: [12, 41] }) })
            // .addTo(map)
            // .bindPopup(location.site_name + ': ' + location.site_address);
        }
      });
    }
  }, [map, locations]);

  useEffect(() => {
    if (!map) {
      const initialMap = L.map('map').setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(initialMap);
      setMap(initialMap);
      fetchLocations();
    }
  }, [map]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (distance <= 300 && formData.coordinates){
      Inertia.visit('/customers');
    }
    // post('/customers');
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   alert(`Data lokasi disimpan: ${JSON.stringify(formData)}`);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-900 to-blue-700 text-black">
      <Header/>
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-blue-700">Cari Lokasi Terdekat</h1>
        <p className="text-lg text-gray-200 mb-6 text-blue-500">Masukkan nama kota atau area untuk mencari lokasi terdekat.</p>

        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Masukkan nama kota atau area"
            className="w-full px-4 py-3 border border-blue-500 rounded-lg shadow-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          {searchResults.length > 0 && (
            <ul className="absolute z-10 w-full bg-white rounded-lg shadow-lg max-h-64 overflow-y-auto mt-2 text-left">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-blue-100 text-black transition duration-300"
                  onClick={() => handleSelectLocation(result.lat, result.lon, result.display_name)}
                >
                  {result.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8 relative">
          <div id="map" className="w-full h-80 rounded-lg overflow-hidden shadow-lg"></div>
          <div className="absolute bottom-0 right-0 bg-blue-900 text-white px-4 py-2 rounded-tr-lg shadow-md">
            Jarak: {distance.toFixed(2)} meter
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Informasi Lokasi</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-black" htmlFor="coordinates">Koordinat:</label>
              <input
                type="text"
                id="coordinates"
                value={formData.coordinates}
                onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-blue-500 focus:outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block text-black" htmlFor="totalDistance">Total Jarak:</label>
              <input
                type="text"
                id="totalDistance"
                value={formData.totalDistance}
                onChange={(e) => setFormData({ ...formData, totalDistance: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-blue-500 focus:outline-none"
                readOnly
              />
            </div>
            <div>
              {/* <label className="block text-white" htmlFor="totalPrice">Total Harga:</label> */}
              {/* <input
                type="text"
                id="totalPrice"
                value={formData.totalPrice}
                onChange={(e) => setFormData({ ...formData, totalPrice: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-blue-500 focus:outline-none"
                readOnly
              /> */}
            </div>
            <div>
              <label className="block text-black" htmlFor="detailedAddress">Alamat Lengkap:</label>
              <input
                type="text"
                id="detailedAddress"
                value={formData.detailedAddress}
                onChange={(e) => setFormData({ ...formData, detailedAddress: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800 border border-blue-500 focus:outline-none"
              />
            </div>
            <a href="/customers">
            <button 
                    type="submit"
                    
                    className={`w-full py-2 px-4 ${
                      distance <= 300 && formData.coordinates
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-700 cursor-not-allowed'
                    } text-white rounded-lg shadow-lg transition duration-200`}
                    disabled={!formData.coordinates || distance > 300}
                  >
                    Cek Layanan Kami
                  </button>
            </a>
           
          </div>
        </form>
      </div>

      <ToastContainer
        transition={Slide}
        autoClose={3000}
        position="top-right"
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}
