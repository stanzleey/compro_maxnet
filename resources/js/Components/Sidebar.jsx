import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const AdminDashb = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-blue-900 text-white transition-transform duration-200 lg:relative lg:translate-x-0 lg:flex lg:flex-col`}
      >
        <div className="p-4 text-center font-bold text-lg bg-blue-800">
          <a href="/dashboard" className="brand-link flex justify-center items-center">
            <img
              src="/assets/images/max_net.png"
              alt="Admin Logo"
              className="h-12 w-12 rounded-full"
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 flex-1">
          <ul className="space-y-2 px-4">
            <li className="nav-item">
              <InertiaLink
                href={route('dashboard')}
                active={route().current('dashboard')}
                className="flex items-center space-x-3 p-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 active:bg-blue-600"
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                href={route('admin.users.index')}
                active={route().current('admin.users.index')}
                className="flex items-center space-x-3 p-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 active:bg-blue-600"
              >
                <i className="nav-icon fas fa-users"></i>
                <p>Users</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                href={route('admin.roles.index')}
                active={route().current('admin.roles.index')}
                className="flex items-center space-x-3 p-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 active:bg-blue-600"
              >
                <i className="nav-icon fas fa-user-shield"></i>
                <p>Roles</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                href={route('admin.services.index')}
                active={route().current('admin.services.index')}
                className="flex items-center space-x-3 p-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 active:bg-blue-600"
              >
                <i className="nav-icon fas fa-list"></i>
                <p>Services</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                href={route('admin.sites.index')}
                active={route().current('admin.sites.index')}
                className="flex items-center space-x-3 p-3 text-base font-medium rounded-md transition-colors duration-200 hover:bg-blue-700 active:bg-blue-600"
              >
                <i className="nav-icon fas fa-globe"></i>
                <p>Sites</p>
              </InertiaLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 bg-gray-50">
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
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminDashb;
