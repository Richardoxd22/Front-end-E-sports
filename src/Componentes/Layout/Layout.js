import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import DescripcionGlobal from '../DescripcionGlobal/DescripcionGlobal';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <DescripcionGlobal />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
