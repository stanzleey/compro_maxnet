
            import CardLayanan from '@/Components/Frontpage/CardLayanan';
            import DividerNotif from '@/Components/Frontpage/DividerNotif';
            import { Footer } from '@/Components/Frontpage/Footer';
            // import { Paket } from '@/Components/Frontpage/Paket';
            import Navbar from '@/Components/Frontpage/Navbar';
            import ProductCard from '@/Components/Frontpage/Product/ProductCard';
            import { ProductListCard } from '@/Components/Frontpage/Product/ProductListCard';
            // import Header from '@/Components/Header';
            import MenuBurger from '@/Components/MenuBurger';
            import PresentedLogo from '@/Components/PresentedLogo';
            import { Link, Head } from '@inertiajs/inertia-react';
            import { Button, createTheme, Grid, Menu, MenuItem, OutlinedInput } from '@mui/material';
            import { FaArrowRight, FaBell, FaCartArrowDown, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHamburger, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaPhone, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTwitter } from 'react-icons/fa';
            import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
            import { Card, CardContent, CardMedia, Typography } from '@mui/material';
            // import PaketInternet from '@/Components/Frontpage/PaketInternet';

            // import Paket from './Paket';
            export default function Welcome(props) {
                const theme = createTheme({
                    breakpoints: {
                        values:{ 
                            xs: 0,
                            sm: 375,
                            md: 760,
                            lg: 1024,
                            xl: 1536,
                        },
                    },
                    
                    
                });
                

                return (
                    <>
                        <Head title="Welcome" />
                        
                        <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                            {/* <Header/> */}
                            {/* <Header/> */}

                            <Navbar props={props} themeGrid={theme}/>
                            <DividerNotif />
                            <div className="py-6 px-10 ">
                            <section className="container mx-auto py-16 px-6 text-center">
                                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                          Internet Cepat & Stabil untuk Semua Kebutuhan Anda
                                        </h1>
                                        <p className="text-lg md:text-xl mb-6">
                                        Nikmati layanan internet dengan koneksi yang cepat dan stabil serta harga yang terjangkau,
                                        memberikan kemudahan bagi Anda untuk berinternet di rumah 
                                        maupun menjalankan bisnis dengan lancar, tanpa khawatir tentang gangguan atau 
                                        penurunan kualitas, sehingga Anda dapat fokus pada aktivitas online sehari-hari 
                                        atau mengelola kebutuhan bisnis Anda secara efisien dan optimal, 
                                        didukung oleh teknologi terkini yang 
                                        memastikan kecepatan akses dan kestabilan jaringan sepanjang waktu.
                                        </p>
                                      </section>

                                      <section id="about" className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
  <div className="md:w-1/2 md:pr-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Kami</h2>
    <p className="text-lg text-gray-600 leading-relaxed mb-6">
      Kami adalah penyedia jasa internet yang menghadirkan 
      akses internet cepat dan stabil. Layanan kami 
      mencakup paket fleksibel, instalasi cepat, dan harga 
      yang kompetitif. Dukungan pelanggan 24/7 siap membantu 
      Anda kapan saja!
    </p>
  </div>
  <div className="md:w-1/2">
    <img src="/assets/images/about.jpg" alt="Internet Service" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
</section>


                                    
                                      {/* Services Section */}
                                      <section id="services" className="container mx-auto py-16 px-6 text-center">
  <h2 className="text-4xl font-bold mb-12 text-gray-100">Layanan Kami</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Service 1 */}
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <img
        src="/assets/images/home_service.jpg"
        alt="Home Internet"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-black text-center">
        <h3 className="text-xl font-bold mb-2">Internet Rumah</h3>
        <p className="text-gray-300">
          Nikmati layanan internet di rumah dengan kecepatan tinggi, cocok untuk bekerja, belajar, dan hiburan.
        </p>
      </div>
    </div>

    {/* Service 2 */}
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <img
        src="/assets/images/bisnis_internet.jpg"
        alt="Business Internet"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-black text-center">
        <h3 className="text-xl font-bold mb-2">Internet Bisnis</h3>
        <p className="text-gray-300">
          Solusi internet khusus untuk bisnis, dengan kecepatan dan stabilitas terbaik untuk operasional perusahaan Anda.
        </p>
      </div>
    </div>

    {/* Service 3 */}
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <img
        src="/assets/images/dukungan.jpg"
        alt="Customer Support"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-black text-center">
        <h3 className="text-xl font-bold mb-2">Dukungan Pelanggan</h3>
        <p className="text-gray-300">
          Layanan dukungan pelanggan 24/7 untuk membantu menyelesaikan masalah internet Anda kapan saja.
        </p>
      </div>
    </div>
  </div>
</section>


                                <div className="mt-20">
                                {/* <Index/> */}
                                    <div className=''>
                                        {/* <h1 className='font-Gilroy-ExtraBold text-[30px]'>Pilih Tipe Layanan Internet Anda</h1> */}
                                    </div>
                                </div>
                            </div>
                            
                            

                            <Footer themeGrid={theme}/>
                        </div>
                    </>
                );
            }
