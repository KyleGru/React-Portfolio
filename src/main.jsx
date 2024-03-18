// import React from 'react';
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
// import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        // path: '/Portfolio',
        // element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);