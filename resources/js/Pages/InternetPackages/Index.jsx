
import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';

const Index = ({ packages }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            Inertia.delete(route('internet-packages.destroy', id));
        }
    };

    return (
        <div>
            <h1>Internet Packages</h1>
            <Link href={route('internet-packages.create')}>Create New Package</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg.id}>
                            <td>{pkg.name}</td>
                            <td>{pkg.price}</td>
                            <td>
                                <Link href={route('internet-packages.edit', pkg.id)}>Edit</Link>
                                <button onClick={() => handleDelete(pkg.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
