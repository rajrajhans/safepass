import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';

class ESNavbar extends Component {
  render() {
    return (
      <Navbar bg={'light'}>
        <Navbar.Brand href={'/'}>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={'justify-content-end'}
        >
          <Nav>
            <Nav.Link href="/" active>
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ESNavbar;
