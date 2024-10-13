import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex items-center flex-shrink-0">
                        <a href="#" title="">
                            <img 
                                src="/assets/images/max_net.png" 
                                alt="" 
                                className="w-[200px]" 
                            />
                        </a>
                    </div>

                    <button 
                        type="button" 
                        onClick={toggleMenu} 
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        {isOpen ? (
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <a href="/paket" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Paket</a>
                        <a href="/map" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cek lokasi</a>
                        <a href="/contact" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Kontak</a>
                        <a href="/" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Home</a>
                        {/* <Link href={route('login')} className='mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]'>
                            Login
                            </Link> */}
                    </div>
                    {/* <Link href={route('login')} className='mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]'>
                                        Login
                                    </Link> */}
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Features</a>
                                <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Solutions</a>
                                <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Resources</a>
                                <a href="#" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
                            </div>
                        </div>

                        <div className="px-6 mt-6">
                            <a href="#" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button">
                                Get started now
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
