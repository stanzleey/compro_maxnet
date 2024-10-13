import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Swal from 'sweetalert2';

export default function Create() {
  const [formData, setFormData] = useState({
    site_id: '',
    site_name: '',
    site_parent: '',
    site_picture: '',
    site_type_id: '',
    site_location_maps: '',
    site_address: '',
    site_port_capacity: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: "You are about to create a new site!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.post('/sites', formData, {
          onSuccess: () => {
            Swal.fire('Success!', 'Site created successfully.', 'success');
          },
          onError: () => {
            Swal.fire('Error!', 'There was an issue creating the site. Please try again.', 'error');
          },
        });
      }
    });
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-screen-md px-4 py-8 mx-auto">
        <h1 className="text-center text-xl font-semibold text-indigo-600">
          Create New Site
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <input
              name="site_id"
              value={formData.site_id}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site ID"
            />
          </div>

          <div>
            <input
              name="site_name"
              value={formData.site_name}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site Name"
            />
          </div>

          <div>
            <input
              name="site_parent"
              value={formData.site_parent}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site Parent"
            />
          </div>

          <div>
            <input
              name="site_picture"
              value={formData.site_picture}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site Picture URL"
            />
          </div>

          <div>
            <input
              name="site_type_id"
              value={formData.site_type_id}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site Type ID"
            />
          </div>

          <div>
            <input
              name="site_location_maps"
              value={formData.site_location_maps}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Location (Lat, Long)"
            />
          </div>

          <div>
            <input
              name="site_address"
              value={formData.site_address}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Site Address"
            />
          </div>

          <div>
            <input
              name="site_port_capacity"
              type="number"
              value={formData.site_port_capacity}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Port Capacity"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
