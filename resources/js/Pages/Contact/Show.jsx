import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Email, Person, Subject, Message as MessageIcon } from '@mui/icons-material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Show({ contact }) {
    return (
        <AuthenticatedLayout>
            <div className="flex-1 p-6">
                <Paper elevation={3} className="p-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <Typography variant="h4" className="font-bold text-blue-600">
                            Contact Details
                        </Typography>
                    </div>

                    {/* Contact Info Section */}
                    <Box className="mb-6 p-4 rounded-lg bg-white shadow-lg">
                        <div className="flex items-center mb-4">
                            <Person className="text-blue-600 mr-2" />
                            <Typography variant="h6" className="font-semibold">
                                Name:
                            </Typography>
                        </div>
                        <Typography>{contact.name}</Typography>
                    </Box>

                    <Divider className="my-4" />

                    <Box className="mb-6 p-4 rounded-lg bg-white shadow-lg">
                        <div className="flex items-center mb-4">
                            <Email className="text-blue-600 mr-2" />
                            <Typography variant="h6" className="font-semibold">
                                Email:
                            </Typography>
                        </div>
                        <Typography>{contact.email}</Typography>
                    </Box>

                    <Divider className="my-4" />

                    <Box className="mb-6 p-4 rounded-lg bg-white shadow-lg">
                        <div className="flex items-center mb-4">
                            <Subject className="text-blue-600 mr-2" />
                            <Typography variant="h6" className="font-semibold">
                                Subject:
                            </Typography>
                        </div>
                        <Typography>{contact.subject}</Typography>
                    </Box>

                    <Divider className="my-4" />

                    <Box className="p-4 rounded-lg bg-white shadow-lg">
                        <div className="flex items-center mb-4">
                            <MessageIcon className="text-blue-600 mr-2" />
                            <Typography variant="h6" className="font-semibold">
                                Message:
                            </Typography>
                        </div>
                        <Typography>{contact.message}</Typography>
                    </Box>

                    {/* Back Button */}
                    <div className="flex justify-end mt-6">
                        <Link
                            href={route('contacts.index')}
                            className="inline-block rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
                        >
                            Back to Contacts List
                        </Link>
                    </div>
                </Paper>
            </div>
        </AuthenticatedLayout>
    );
}
