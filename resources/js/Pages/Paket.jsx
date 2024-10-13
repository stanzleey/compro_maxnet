import React from 'react';


const Paket = () => {
    // Data paket internet
    const packages = [
        { id: 1, name: 'Paket Basic', price: 'Rp 50.000' },
        { id: 2, name: 'Paket Standard', price: 'Rp 100.000' },
        { id: 3, name: 'Paket Premium', price: 'Rp 150.000' },
    ];

    const handleAddPackage = () => {
        // Di sini Anda dapat menambahkan navigasi ke halaman penambahan paket atau membuka modal form tambah paket
        alert('Tambah Paket baru');
    };

    return (
        
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Daftar Paket Internet</h1>
            
            {/* Tombol Tambah Paket */}
            <div className="flex justify-end mb-5">
                <a href="/admin/internet-packages/create-paket"><button 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Tambah Paket
                </button></a>
                
            </div>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-900">#</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-900">Nama Paket</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-900">Harga</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-900">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg, index) => (
                        <tr key={pkg.id}>
                            <td className="px-6 py-4 border-b">{index + 1}</td>
                            <td className="px-6 py-4 border-b">{pkg.name}</td>
                            <td className="px-6 py-4 border-b">{pkg.price}</td>
                            <td className="px-6 py-4 border-b">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-700">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Paket;
