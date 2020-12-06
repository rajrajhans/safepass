import Navbar from 'react-bootstrap/Navbar';
import React, { Component, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';
import { AuthContext } from './AuthContext';
import { Link } from '@reach/router';

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
          <Link to="/" className={'nav-link'}>
            Home
          </Link>
          {currentUser ? (
            <>
              <Link to="/dashboard" className={'nav-link'}>
                Dashboard
              </Link>

              <Link to="/logout" className={'nav-link'}>
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className={'nav-link'}>
                Sign In
              </Link>

              <Link to="/signup" className={'nav-link'}>
                Sign Up
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
