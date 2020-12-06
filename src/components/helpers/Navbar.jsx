import Navbar from 'react-bootstrap/Navbar';
import React, { Component, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
import { AuthContext } from './AuthContext';

const CustomNavbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Navbar bg={'light'}>
      <Navbar.Brand href={'/'}>
        <Logo />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          {currentUser ? (
            <>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>

              <Nav.Link href="/logout">Sign Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Sign In</Nav.Link>

              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
