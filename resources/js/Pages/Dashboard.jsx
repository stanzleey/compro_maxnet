import Navbar from '@/Components/Frontpage/Navbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import { useEffect } from 'react';
import axios from 'axios';
import { FaEllipsisH, FaLayerGroup, FaServicestack, FaSignal, FaSms, FaUser } from 'react-icons/fa';
export default function Dashboard(props) {
  const { userCount, roleCount, serviceCount, siteCount, customerCount, contactCount } = props;
//   const [serviceCount,setServiceCount]= useState(0);
//  useEffect(()=>{
//   axios.get('/api/services/count').then(response=>{
//     setServiceCount(response.data.count);
//   })
//  })
  return (
    <AuthenticatedLayout
      auth={props.auth}
      roleAuth={props.roleAuth}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />
      {/* Uncomment if Navbar is required */}
      {/* <Navbar /> */}

      <div className="py-4">
        <div className="max-w-full mx-auto sm:px-4 lg:px-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <h3 className="text-lg font-medium">Welcome to the Dashboard!</h3>
              <p className="mt-4">You are successfully logged in.</p>
              
              {/* Dashboard Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <FaUser className='inline ml-3'/>
                  <h4 className="font-semibold text-blue-900">Total Users</h4>
                  <p className="mt-2 text-3xl font-bold">{userCount}</p>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                  <FaEllipsisH className='inline ml-3'/>
                  <h4 className="font-semibold text-green-900">Total Roles</h4>
                  <p className="mt-2 text-3xl font-bold">{roleCount}</p>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <FaServicestack className='inline ml-3'/>
                  <h4 className="font-semibold text-yellow-900">Total Services</h4>
                  <p className="mt-2 text-3xl font-bold">{serviceCount}</p>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg shadow-md">
                <FaSignal className='inline ml-3'/>
                  <h4 className="font-semibold text-purple-900">Total Sites</h4>
                  <p className="mt-2 text-3xl font-bold">{siteCount}</p>
                </div>

                <div className="bg-red-100 p-4 rounded-lg shadow-md">
                <FaLayerGroup className='inline ml-3'/>
                  <h4 className="font-semibold text-red-900">Total Customers</h4>
                  <p className="mt-2 text-3xl font-bold">{customerCount}</p>
                </div>

                <div className="bg-teal-100 p-4 rounded-lg shadow-md">
                <FaSms className='inline ml-3'/>
                  <h4 className="font-semibold text-teal-900">Total Contacts</h4>
                  <p className="mt-2 text-3xl font-bold">{contactCount}</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
