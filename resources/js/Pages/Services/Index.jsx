import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ services }) {
    // Function to handle delete with confirmation
    const handleDelete = (serviceId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route('services.destroy', serviceId), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'The service has been deleted.', 'success');
                    }
                });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex-1 p-6 overflow-x-auto">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-xl font-bold">Services List</h1>
                    <Link
                        href={route('services.create')}
                        className="inline-block rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                    >
                        Create New Service
                    </Link>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="services table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nama Paket</TableCell>
                                <TableCell align="center">Kecepatan (Mbps)</TableCell>
                                <TableCell align="center">Deskripsi</TableCell>
                                <TableCell align="center">Harga</TableCell>
                                <TableCell align="center">Diskon</TableCell>
                                <TableCell align="center">Visible</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {services.length > 0 ? (
                                services.map((service) => (
                                    <TableRow key={service.serv_id}>
                                        <TableCell align="center">
                                            {service.service_name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {service.service_speed} Mbps
                                        </TableCell>
                                        <TableCell align="center">
                                            {service.service_description}
                                        </TableCell>
                                        <TableCell align="center">
                                            ${service.service_price}
                                        </TableCell>
                                        <TableCell align="center">
                                            ${service.service_discount}
                                        </TableCell>
                                        <TableCell align="center">
                                            {service.is_visible ? 'Yes' : 'No'}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link
                                                href={route('services.edit', service.serv_id)}
                                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-600 mr-2"
                                            >
                                                Edit
                                            </Link>

                                            {/* Delete Button with SweetAlert */}
                                            <button
                                                onClick={() => handleDelete(service.serv_id)}
                                                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} align="center">
                                        No services found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </AuthenticatedLayout>
    );
}
