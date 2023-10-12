import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home, ErrorPage } from './pages';
import { Navbar, Footer } from './components';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='mx-4'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
