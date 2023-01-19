import React from 'react';
import Header from '../components/Header';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
   return (
      <div className="layout">
         <Header />
         {children}
      </div>
   );
}

export default Layout;
