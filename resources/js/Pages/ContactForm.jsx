import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import { Footer } from '@/Components/Frontpage/Footer';
import Header from '@/Components/Header';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/contact', values, {
            onSuccess: (response) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: response.message || 'Your message has been sent successfully.',
                    showConfirmButton: false,
                    timer: 3000,
                });

                setValues({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            },
            onError: (errors) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something went wrong.',
                    showConfirmButton: false,
                    timer: 3000,
                });
            },
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1 justify-center items-start py-16 px-6">
                <div className="flex flex-col md:flex-row w-full max-w-6xl">
                    {/* Contact Form Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 md:mr-4">
                        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 flex items-center">
                        <img 
                            src="/assets/images/cs.jpg" 
                            alt="Contact Us" 
                            className="w-full h-full object-cover rounded-lg shadow-lg" // Updated className for image
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;
