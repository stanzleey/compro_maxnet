import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Swal from 'sweetalert2';

export default function Create() {
  const [formData, setFormData] = useState({
    serv_id: '',
    service_name: '',
    service_speed: '',
    service_description: '',
    service_price: '',
    service_discount: '',
    is_visible: true,
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
      text: "You are about to create a new service!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.post(route('services.store'), formData, {
          onSuccess: () => {
            Swal.fire('Success!', 'Service has been created successfully.', 'success');
          },
          onError: () => {
            Swal.fire('Error!', 'There was an issue creating the service. Please try again.', 'error');
          },
        });
      }
    });
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-screen-md px-4 py-8 mx-auto">
        <h1 className="text-center text-xl font-semibold text-indigo-600">
          Create New Service
        </h1>
        {/* <p className="mt-2 text-center text-gray-500">
          Fill out the form to create a new service.
        </p> */}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <input
              name="serv_id"
              value={formData.serv_id}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service ID"
            />
          </div>

          <div>
            <input
              name="service_name"
              value={formData.service_name}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service Name"
            />
          </div>

          <div>
            <input
              name="service_speed"
              value={formData.service_speed}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service Speed"
            />
          </div>

          <div>
            <input
              name="service_description"
              value={formData.service_description}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service Description"
            />
          </div>

          <div>
            <input
              name="service_price"
              value={formData.service_price}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service Price"
            />
          </div>

          <div>
            <input
              name="service_discount"
              value={formData.service_discount}
              onChange={handleChange}
              className="w-full rounded border-gray-300 p-2 text-sm"
              placeholder="Service Discount"
            />
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="is_visible" className="text-sm text-gray-600">
              Visible
            </label>
            <input
              type="checkbox"
              name="is_visible"
              checked={formData.is_visible}
              onChange={() =>
                setFormData({
                  ...formData,
                  is_visible: !formData.is_visible,
                })
              }
              className="rounded border-gray-300"
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
