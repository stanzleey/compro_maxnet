import React, { useState } from 'react';
import { InertiaLink, Inertia } from '@inertiajs/inertia-react';
import { FaSignOutAlt, FaTachometerAlt, FaUser, FaEllipsisH, FaServicestack, FaSignal, FaLayerGroup, FaSms } from 'react-icons/fa';

const AdminDashb = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    Inertia.post(route('logout'));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-0 z-20 transform ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        } w-64 bg-blue-400 text-white transition-transform lg:relative lg:translate-x-0 sidebar-dark-primary elevation-4`}
      >
        <div className="p-4 text-center font-bold text-lg bg-white-800">
          <a href="/dashboard" className="brand-link">
            <img
              src="/assets/images/max_net.png"
              alt="Admin Logo"
              className="brand-image img-circle elevation-3 bg-white-100"
              style={{ opacity: '.8' }}
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4">
          <ul className="space-y-2 px-2">
            <li className="nav-item">
              <InertiaLink href={route('dashboard')} active={route().current('dashboard')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaTachometerAlt className='inline ml-3'/>
                <p>Dashboard</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.users.index')} active={route().current('admin.users.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaUser className='inline ml-3'/>
                <p>User</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.roles.index')} active={route().current('admin.roles.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaEllipsisH className='inline ml-3'/>
                <p>Roles</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.services.index')} active={route().current('admin.services.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaServicestack className='inline ml-3'/>
                <p>Service</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.sites.index')} active={route().current('admin.sites.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaSignal className='inline ml-3'/>
                <p>Site</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.customers.index')} active={route().current('admin.customers.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaLayerGroup className='inline ml-3'/>
                <p>Customer</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href={route('admin.contacts.index')} active={route().current('admin.contacts.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
                <FaSms className='inline ml-3'/>
                <p>Contact</p>
              </InertiaLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-1 bg-white-50">
        {/* Header with Logout Button */}
        <header className="bg-blue-600 text-white shadow p-4 flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>

          <InertiaLink href={route('logout')} method="post" as="button" active={route().current('admin.sites.index')} className="flex items-center space-x-3 p-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-600">
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
          </InertiaLink>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminDashb;





// import { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import { Link } from '@inertiajs/inertia-react';

// export default function Authenticated({ auth, roleAuth, header, children }) {
//     const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    
//     return (
//         <div className="min-h-screen bg-gray-100">
//             <nav className="bg-white border-b border-gray-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="shrink-0 flex items-center">
//                                 <Link href="/">
//                                     <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
//                                 </Link>
//                             </div>
                            
//                             {roleAuth.name == 'Admin' &&
//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     Dashboard
//                                 </NavLink>

//                                  <NavLink href={route('admin.users.index')} active={route().current('admin.users.index')}>
//                                     Users
//                                 </NavLink>

//                                 <NavLink href={route('admin.roles.index')} active={route().current('admin.roles.index')}>
//                                     Roles
//                                 </NavLink> 
                                
//                                 <NavLink href={route('admin.services.index')} active={route().current('admin.services.index')}>
//                                     Service
//                                 </NavLink> 

//                                 <NavLink href={route('admin.sites.index')} active={route().current('admin.sites.index')}>
//                                     Sites
//                                 </NavLink> 
                                
//                                 <NavLink href={route('admin.customer.index')} active={route().current('admin.customer.index')}>
//                                     Customer
//                                 </NavLink> 
                                
//                             </div>
//                             }
                            
//                             {roleAuth.name == 'User' &&
//                             <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                                 <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                                     Dashboard
//                                 </NavLink>

//                             </div>
//                             }
//                         </div>

//                         <div className="hidden sm:flex sm:items-center sm:ml-6">
//                             <div className="ml-3 relative">
//                                 <Dropdown>
//                                     <Dropdown.Trigger>
//                                         <span className="inline-flex rounded-md">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
//                                             >
//                                                 {auth.user.name}

//                                                 <svg
//                                                     className="ml-2 -mr-0.5 h-4 w-4"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     />
//                                                 </svg>
//                                             </button>
//                                         </span>
//                                     </Dropdown.Trigger>

//                                     <Dropdown.Content>
//                                         <Dropdown.Link href={route('admin.profile.edit')}>Profile</Dropdown.Link>
//                                         <Dropdown.Link href={route('logout')} method="post" as="button">
//                                             Log Out
//                                         </Dropdown.Link>
//                                     </Dropdown.Content>
//                                 </Dropdown>
//                             </div>
//                         </div>

//                         <div className="-mr-2 flex items-center sm:hidden">
//                             <button
//                                 onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
//                             >
//                                 <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                                     <path
//                                         className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                     <path
//                                         className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
//                     <div className="pt-2 pb-3 space-y-1">
//                         <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
//                             Dashboard
//                         </ResponsiveNavLink>
//                     </div>

//                     <div className="pt-4 pb-1 border-t border-gray-200">
//                         <div className="px-4">
//                             <div className="font-medium text-base text-gray-800">
//                                 {auth.user.name}
//                             </div>
//                             <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
//                         </div>

//                         <div className="mt-3 space-y-1">
//                             <ResponsiveNavLink href={route('admin.profile.edit')}>Profile</ResponsiveNavLink>
//                             <ResponsiveNavLink method="post" href={route('logout')} as="button">
//                                 Log Out
//                             </ResponsiveNavLink>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {header && (
//                 <header className="bg-white shadow">
//                     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }
