import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import Header from '@/Components/Header';
import { Footer } from '@/Components/Frontpage/Footer';

const Create = () => {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        nik: '',
        address_ktp: '',
        phone_number: '',
        internet_package: '',
        installation_address: '',
        ktp_photo: null,
        house_photo: null,
        
    });
    useEffect(()=> {
        const params = new URLSearchParams(window.location.search);
        const selectedPackage = params.get('package');
        if (selectedPackage){
            setData('service_name',selectedPackage );
        }
    }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/customers');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow flex justify-center items-center">
                <Paper elevation={3} className="p-6 w-full max-w-md">
                    <Typography variant="h5" className="mb-4" align="center">
                        Create Customer
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="NIK"
                            value={data.nik}
                            onChange={(e) => setData('nik', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Address KTP"
                            value={data.address_ktp}
                            onChange={(e) => setData('address_ktp', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Nomor Teflon"
                            value={data.phone_number}
                            onChange={(e) => setData('phone_number', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Paket Internet"
                            value={data.internet_package}
                            onChange={(e) => setData('internet_package', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="Alamat pemasangan"
                            value={data.installation_address}
                            onChange={(e) => setData('installation_address', e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            label="koordinat pemasangan"
                            value={data.koordinat_pasang}
                            onChange={(e) => setData('koordinat_pasang', e.target.value)}
                            required
                        />
                        <input
                            type="file"
                            onChange={(e) => setData('ktp_photo', e.target.files[0])}
                            style={{ margin: '10px 0' }}
                        />
                        <input
                            type="file"
                            onChange={(e) => setData('house_photo', e.target.files[0])}
                            style={{ margin: '10px 0' }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            className="mt-4"
                        >
                            Create
                        </Button>
                    </form>
                </Paper>
            </main>
            <Footer />
        </div>
    );
};

export default Create;
