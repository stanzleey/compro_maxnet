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

export default function Index({ auth, sites }) {
    const handleDelete = (siteId) => {
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
                Inertia.delete(route('sites.destroy', siteId), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'The site has been deleted.', 'success');
                    }
                });
            }
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <div className="flex-1 p-6 overflow-x-auto">
                <div className="flex justify-between items-start mb-4">
                    <h1 className="text-xl font-bold">Sites List</h1>
                    <Link
                        href={route('sites.create')}
                        className="inline-block rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                    >
                        Create New Site
                    </Link>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="sites table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Site ID</TableCell>
                                <TableCell align="center">Site Name</TableCell>
                                <TableCell align="center">Site Description</TableCell>
                                <TableCell align="center">Site Type</TableCell>
                                <TableCell align="center">Location</TableCell>
                                <TableCell align="center">Site Address</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sites.length > 0 ? (
                                sites.map((site) => (
                                    <TableRow key={site.site_id}>
                                        <TableCell align="center">{site.site_id}</TableCell>
                                        <TableCell align="center">{site.site_name}</TableCell>
                                        <TableCell align="center">{site.site_description}</TableCell>
                                        <TableCell align="center">{site.site_type_id}</TableCell>
                                        <TableCell align="center">{site.site_location_maps}</TableCell>
                                        <TableCell align="center">{site.site_address}</TableCell>
                                        <TableCell align="center">
                                            <Link
                                                href={route('sites.edit', site.site_id)}
                                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-600 mr-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(site.site_id)}
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
                                        No sites found
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
