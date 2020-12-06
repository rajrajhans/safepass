import React from 'react';
import ESNavbar from './helpers/Navbar';
import Container from 'react-bootstrap/Container';

const Layout = children => {
  return (
    <div className={'layout'}>
      <ESNavbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
