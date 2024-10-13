import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

const Create = (props) => {
    const { data, setData, post, errors } = useForm({
        name: '',
        price: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/internet-packages'); // Endpoint untuk menambahkan paket baru
    };

    return (
        
            

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold mb-5">Tambah Paket Internet</h1>

                            {/* Form Tambah Paket */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Nama Paket</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required
                                    />
                                    {errors.name && <div className="text-red-600 mt-1">{errors.name}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Harga</label>
                                    <input
                                        type="text"
                                        value={data.price}
                                        onChange={e => setData('price', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required
                                    />
                                    {errors.price && <div className="text-red-600 mt-1">{errors.price}</div>}
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                    >
                                        Simpan Paket
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Create;
