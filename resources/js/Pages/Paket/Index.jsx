import React from 'react';
import Slider from 'react-slick';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import { Footer } from '@/Components/Frontpage/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PaketInternet = ({ services }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Head title="Paket Internet" />
      <div className="bg-gray-100 min-h-screen">
        {/* Container utama */}
        <div className="container mx-auto py-12">
          {/* Judul */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Paket Internet Terbaik</h1>

          {/* Slider Paket Internet */}
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <div key={service.serv_id} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Image for the service */}
                    <img src="/assets/images/mbps.jpg" alt="gambar" />
                    {/* <img
                      src={service.image_url} // Replace with the appropriate image URL from your service object
                      alt={service.service_name}
                      className="w-full h-32 object-cover mb-4 rounded" // Add styling for the image
                    /> */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{service.service_name}</h2>
                    <p className="text-gray-600">Kecepatan: {service.service_speed} MBPS</p>
                    <p className="text-gray-600 mb-4">Harga: Rp {service.service_price}</p>
                  </div>
                  {/* Uncomment the button to enable buying feature */}
                  {/* <a href="/customers" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                    Beli Sekarang
                  </button>
                  </a> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PaketInternet;
