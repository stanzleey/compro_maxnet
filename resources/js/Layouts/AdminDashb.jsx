import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const AdminDashb = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-0 z-20 transform ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        } w-64 bg-blue-900 text-white transition-transform lg:relative lg:translate-x-0 sidebar-dark-primary elevation-4`}
      >
        <div className="p-4 text-center font-bold text-lg">
          <a href="/dashboard" className="brand-link">
            <img
              src="/path/to/logo.png"
              alt="Admin Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: '.8' }}
            />
            <span className="brand-text font-weight-light text-blue-100">
              Admin Portfolio
            </span>
          </a>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <InertiaLink href="/admin/dashboard" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href="/admin/pesan" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-envelope"></i>
                <p>Pesan</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href="/admin/portfolio" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-file"></i>
                <p>Portfolio</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href="/admin/service" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-list"></i>
                <p>Skills</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href="/admin/banner" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-image"></i>
                <p>Banner</p>
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink href="/admin/user" className="nav-link hover:bg-blue-700">
                <i className="nav-icon fas fa-users"></i>
                <p>Users</p>
              </InertiaLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 bg-blue-50">
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
