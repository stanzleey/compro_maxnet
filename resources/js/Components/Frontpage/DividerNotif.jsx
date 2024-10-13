import { useState } from 'react';

export default function DividerNotifCarousel({ className }) {
    // State to manage the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Updated dummy data for slides including descriptions
    const slides = [
        { 
            title: 'Keamanan Jaringan', 
            imgSrc: '/assets/images/laptop.jpg', 
            description: ' Keamanan adalah aspek penting dari setiap jaringan. Kami menyediakan audit keamanan jaringan untuk mengidentifikasi kerentanan dan menerapkan solusi perlindungan yang tepat, seperti firewall, sistem deteksi intrusi, dan VPN.' 
        },
        { 
            title: 'Pemeliharaan dan Dukungan Jaringan', 
            imgSrc: '/assets/images/jaringan.jpg', 
            description: ' Menjaga jaringan Anda tetap berfungsi dengan baik adalah prioritas kami. Kami menawarkan layanan pemeliharaan berkala untuk memastikan semua perangkat dalam kondisi optimal. Dukungan teknis 24/7 juga tersedia untuk membantu mengatasi masalah yang mungkin timbul, baik secara langsung maupun melalui remote access.' 
        },
        { 
            title: 'Layanan Internet Berkecepatan Tinggi', 
            imgSrc: '/assets/images/signal.jpg', 
            description: ' Nikmati koneksi internet super cepat dengan paket layanan kami yang dirancang sesuai kebutuhan Anda. Kami bekerja sama dengan penyedia internet terkemuka untuk memastikan Anda mendapatkan kecepatan dan stabilitas yang dibutuhkan, baik untuk penggunaan di rumah maupun bisnis.' 
        }
    ];

    // Go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Slides wrapper */}
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-[400px] relative">
                        {/* Background image fills the slide */}
                        <img
                            src={slide.imgSrc}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlaying the title and description on top of the image */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4">
                            <h1 className="text-white font-Gilroy-ExtraBold text-[40px]">{slide.title}</h1>
                            <p className="text-white text-lg text-center mt-2">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white opacity-50 px-3 py-2 rounded-full hover:opacity-80 transition-opacity duration-300"
            >
                &#9664;
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white opacity-50 px-3 py-2 rounded-full hover:opacity-80 transition-opacity duration-300"
            >
                &#9654;
            </button>
        </div>
    );
}
