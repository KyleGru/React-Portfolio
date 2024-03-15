import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;