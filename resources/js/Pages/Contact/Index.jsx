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

export default function Index({ contacts }) {
    // Function to handle delete with SweetAlert confirmation
    const handleDelete = (contactId) => {
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
                Inertia.delete(route('contacts.destroy', contactId), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'The contact has been deleted.', 'success');
                    },
                });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex-1 p-6 overflow-x-auto">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-xl font-bold">Contacts List</h1>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="contacts table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Subject</TableCell>
                                <TableCell align="center">Message</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contacts.length > 0 ? (
                                contacts.map((contact) => (
                                    <TableRow key={contact.id}>
                                        <TableCell align="center">{contact.name}</TableCell>
                                        <TableCell align="center">{contact.email}</TableCell>
                                        <TableCell align="center">{contact.subject}</TableCell>
                                        <TableCell align="center">{contact.message}</TableCell>
                                        <TableCell align="center">
                                            <Link
                                                href={route('contacts.show', contact.id)}
                                                className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-600 mr-2"
                                            >
                                                View
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(contact.id)}
                                                className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                            >
                                                Delete
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} align="center">
                                        No contacts found
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
