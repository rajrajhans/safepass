import React, { Component, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link, navigate } from '@reach/router';
import logoImageSrc from './HomeComponents/logo-light.png';
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase,
} from '../helpers/HomeComponents/LightHeader';
import tw from 'twin.macro';
import { Content2Xl } from './HomeComponents/HomeLayouts';

const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(
  NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
  PrimaryLinkBase
)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;
const PrimaryBackgroundContainer = tw.div`px-8 bg-primary-900 text-gray-100`;

const CustomNavbar = () => {
  const { currentUser } = useContext(AuthContext);

  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      SafePass
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        Home
      </NavLink>

      {currentUser ? (
        <>
          <NavLink
            onClick={() => navigate('/dashboard')}
            style={{ cursor: 'pointer' }}
          >
            Dashboard
          </NavLink>
          <NavLink
            onClick={() => navigate('/signout')}
            style={{ cursor: 'pointer' }}
          >
            Sign Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            onClick={() => navigate('/login')}
            style={{ cursor: 'pointer' }}
          >
            Sign In
          </NavLink>
          <NavLink
            onClick={() => navigate('/signup')}
            style={{ cursor: 'pointer' }}
          >
            Sign Up
          </NavLink>
        </>
      )}
    </NavLinks>,
  ];

  return (
    <PrimaryBackgroundContainer>
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );

  // return (
  //
  //   <Navbar bg={'light'}>
  //     <Navbar.Brand href={'/'}>
  //       <Logo />
  //     </Navbar.Brand>
  //
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
  //       <Nav>
  //         <Link to="/" className={'nav-link'}>
  //           Home
  //         </Link>
  //         {currentUser ? (
  //           <>
  //             <Link to="/dashboard" className={'nav-link'}>
  //               Dashboard
  //             </Link>
  //
  //             <Link to="/logout" className={'nav-link'}>
  //               Sign Out
  //             </Link>
  //           </>
  //         ) : (
  //           <>
  //             <Link to="/login" className={'nav-link'}>
  //               Sign In
  //             </Link>
  //
  //             <Link to="/signup" className={'nav-link'}>
  //               Sign Up
  //             </Link>
  //           </>
  //         )}
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // );
};

export default CustomNavbar;
