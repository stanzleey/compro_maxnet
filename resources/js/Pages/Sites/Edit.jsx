import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2'; // Import SweetAlert2
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Edit = ({ site }) => {
    const [values, setValues] = useState({
        site_id: site.site_id,
        site_name: site.site_name,
        site_parent: site.site_parent,
        site_picture: site.site_picture,
        site_type_id: site.site_type_id,
        site_location_maps: site.site_location_maps,
        site_address: site.site_address,
        site_port_capacity: site.site_port_capacity,
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.put(route('sites.update', site.site_id), values, {
            onSuccess: () => {
                // Trigger SweetAlert2 on successful update
                Swal.fire({
                    title: "Success!",
                    text: "Site updated successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            },
            onError: (error) => {
                // Handle error notification if needed
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update the site.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex">
                {/* Sidebar - if you want to add any */}
                
                {/* Main Content */}
                <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-bold mb-6">Edit Site</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium">Site ID</label>
                            <input 
                                type="text" 
                                name="site_id" 
                                value={values.site_id} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                                disabled // You might want to disable the ID field for editing
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Name</label>
                            <input 
                                type="text" 
                                name="site_name" 
                                value={values.site_name} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Parent</label>
                            <input 
                                type="text" 
                                name="site_parent" 
                                value={values.site_parent} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Picture</label>
                            <input 
                                type="text" 
                                name="site_picture" 
                                value={values.site_picture} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Type ID</label>
                            <input 
                                type="text" 
                                name="site_type_id" 
                                value={values.site_type_id} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Location (Maps)</label>
                            <input 
                                type="text" 
                                name="site_location_maps" 
                                value={values.site_location_maps} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Site Address</label>
                            <input 
                                type="text" 
                                name="site_address" 
                                value={values.site_address} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Port Capacity</label>
                            <input 
                                type="number" 
                                name="site_port_capacity" 
                                value={values.site_port_capacity} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Update Site
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
