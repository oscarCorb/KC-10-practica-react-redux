import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="layout-header" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
