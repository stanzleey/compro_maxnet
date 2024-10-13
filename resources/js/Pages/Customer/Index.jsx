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

const Index = ({ customers, auth }) => {
    // Function to handle delete with confirmation
    const deleteCustomer = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/customers/${id}`, {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
                    },
                });
            }
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <div className="flex justify-between items-start mb-4">
                <h1 className="text-xl font-bold">Customers List</h1>
                <Link
                    href="/customers/create"
                    className="inline-block rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                >
                    Create New Customer
                </Link>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="customers table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nama</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">NIK</TableCell>
                            <TableCell align="center">Alamat KTP</TableCell>
                            <TableCell align="center">Nomor Telfon</TableCell>
                            <TableCell align="center">Paket Internet</TableCell>
                            <TableCell align="center">Alamat Pemasangan</TableCell>
                            <TableCell align="center">Koordinat Pemasangan</TableCell>
                            <TableCell align="center">Foto KTP</TableCell>
                            <TableCell align="center">Foto Rumah</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.length > 0 ? (
                            customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell align="center">{customer.name}</TableCell>
                                    <TableCell align="center">{customer.email}</TableCell>
                                    <TableCell align="center">{customer.nik}</TableCell>
                                    <TableCell align="center">{customer.address_ktp}</TableCell>
                                    <TableCell align="center">{customer.phone_number}</TableCell>
                                    <TableCell align="center">{customer.internet_package}</TableCell>
                                    <TableCell align="center">{customer.installation_address}</TableCell>
                                    <TableCell align="center">{customer.koordinat_pasang}</TableCell>
                                    <TableCell align="center">
                                        {customer.ktp_photo && (
                                            <img
                                                src={`/storage/${customer.ktp_photo}`}
                                                alt="KTP Photo"
                                                width="50"
                                                height="50"
                                                className="rounded"
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {customer.house_photo && (
                                            <img
                                                src={`/storage/${customer.house_photo}`}
                                                alt="House Photo"
                                                width="50"
                                                height="50"
                                                className="rounded"
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link
                                            href={`/customers/${customer.id}`}
                                            className="inline-block rounded bg-blue-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600 mr-2"
                                        >
                                            Show
                                        </Link>
                                        <button
                                            onClick={() => deleteCustomer(customer.id)}
                                            className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={11} align="center">
                                    No customers found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </AuthenticatedLayout>
    );
};

export default Index;
