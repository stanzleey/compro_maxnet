import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Edit = ({ service }) => {
    const [values, setValues] = useState({
        service_name: service.service_name,
        service_speed: service.service_speed,
        service_description: service.service_description,
        service_price: service.service_price,
        service_discount: service.service_discount,
        is_visible: service.is_visible,
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.put(`/services/${service.serv_id}`, values, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Service updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            },
            onError: (error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex">
                {/* Sidebar */}
                {/* Main Content */}
                <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-bold mb-6">Edit Service</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium">Service Name</label>
                            <input 
                                type="text" 
                                name="service_name" 
                                value={values.service_name} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Service Speed</label>
                            <input 
                                type="number" 
                                name="service_speed" 
                                value={values.service_speed} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Description</label>
                            <input 
                                type="text" 
                                name="service_description" 
                                value={values.service_description} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Price</label>
                            <input 
                                type="text" 
                                name="service_price" 
                                value={values.service_price} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Discount</label>
                            <input 
                                type="text" 
                                name="service_discount" 
                                value={values.service_discount} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
