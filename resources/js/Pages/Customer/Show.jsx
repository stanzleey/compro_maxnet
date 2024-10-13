import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Show = ({ customer }) => {
    return (
        <AuthenticatedLayout>
            <div className="flex-1 p-6">
                <Paper elevation={3} className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <Typography variant="h4" className="font-bold">
                            Customer Details
                        </Typography>
                    </div>

                    <div className="mb-4">
                        <Typography variant="h6" className="font-semibold">Name:</Typography>
                        <Typography>{customer.name}</Typography>
                    </div>

                    <div className="mb-4">
                        <Typography variant="h6" className="font-semibold">Email:</Typography>
                        <Typography>{customer.email}</Typography>
                    </div>

                    <div className="mb-4">
                        <Typography variant="h6" className="font-semibold">NIK:</Typography>
                        <Typography>{customer.nik}</Typography>
                    </div>

                    <div className="mb-4">
                        <Typography variant="h6" className="font-semibold">Photos:</Typography>
                        <div className="flex space-x-4">
                            {customer.ktp_photo && (
                                <div className="flex flex-col items-center">
                                    {/* Link to open KTP photo in a new tab */}
                                    <a href={`/storage/${customer.ktp_photo}`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/storage/${customer.ktp_photo}`}
                                            alt="KTP Photo"
                                            width="150"
                                            height="150"
                                            className="rounded shadow-md mb-2 hover:opacity-90 transition-opacity duration-200"
                                        />
                                    </a>
                                    <Typography variant="body2">KTP Photo</Typography>
                                </div>
                            )}
                            {customer.house_photo && (
                                <div className="flex flex-col items-center">
                                    {/* Link to open House photo in a new tab */}
                                    <a href={`/storage/${customer.house_photo}`} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/storage/${customer.house_photo}`}
                                            alt="House Photo"
                                            width="150"
                                            height="150"
                                            className="rounded shadow-md mb-2 hover:opacity-90 transition-opacity duration-200"
                                        />
                                    </a>
                                    <Typography variant="body2">House Photo</Typography>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Link
                            href="/admin/customers"
                            className="inline-block rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                        >
                            Back to Customers List
                        </Link>
                    </div>
                </Paper>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
