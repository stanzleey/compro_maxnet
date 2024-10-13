// import React, { useState } from 'react';
// import { Inertia } from '@inertiajs/inertia';

// const Form = ({ customer = {} }) => {
//     const [formData, setFormData] = useState({
//         name: customer.name || '',
//         email: customer.email || '',
//         nik: customer.nik || '',
//         address_ktp: customer.address_ktp || '',
//         phone_number: customer.phone_number || '',
//         internet_package: customer.internet_package || '',
//         installation_address: customer.installation_address || '',
//         ktp_photo: customer.ktp_photo || '',
//         house_photo: customer.house_photo || '',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (customer.id) {
//             Inertia.put(`/customers/${customer.id}`, formData);  // Update existing customer
//         } else {
//             Inertia.post('/customers', formData);  // Create new customer
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto">
//             <h1>{customer.id ? 'Edit Customer' : 'Create New Customer'}</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter customer name"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter customer email"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">NIK</label>
//                     <input
//                         type="text"
//                         name="nik"
//                         value={formData.nik}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter NIK"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Address (KTP)</label>
//                     <input
//                         type="text"
//                         name="address_ktp"
//                         value={formData.address_ktp}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter address as per KTP"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Phone Number</label>
//                     <input
//                         type="text"
//                         name="phone_number"
//                         value={formData.phone_number}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter phone number"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Internet Package</label>
//                     <input
//                         type="text"
//                         name="internet_package"
//                         value={formData.internet_package}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter internet package"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">Installation Address</label>
//                     <input
//                         type="text"
//                         name="installation_address"
//                         value={formData.installation_address}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter installation address"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">KTP Photo URL</label>
//                     <input
//                         type="text"
//                         name="ktp_photo"
//                         value={formData.ktp_photo}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter KTP photo URL"
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block">House Photo URL</label>
//                     <input
//                         type="text"
//                         name="house_photo"
//                         value={formData.house_photo}
//                         onChange={handleChange}
//                         className="w-full border border-gray-300 p-2 rounded"
//                         placeholder="Enter house photo URL"
//                         required
//                     />
//                 </div>

//                 <div className="mt-6">
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//                     >
//                         {customer.id ? 'Update Customer' : 'Create Customer'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Form;
