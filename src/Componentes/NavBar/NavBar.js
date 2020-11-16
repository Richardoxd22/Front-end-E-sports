import React, { useState } from 'react';
import { Navbar, Nav, Image, Button, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { EstiloNavbar } from './EstilosNavBar';
import { Link } from 'react-router-dom';
import Icono from '../../assets/logo1.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Navbar variant='dark' expand='lg' style={EstiloNavbar}>
      <Navbar.Brand href='#home'>
        <Image src={Icono} width={70} height={60}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link href='/' className='nav-link'>
            <i className='home icon'></i> Home
          </Link>

          <Link href='/eventos' className='nav-link'>
            <i className='gamepad icon'></i> Eventos
          </Link>

          <Link href='/crearEvento' className='nav-link'>
            <i className='newspaper outline'></i> Crear Evento
          </Link>

          <Link href='/perfil' className='nav-link'>
            <i className='user icon'></i> Perfil
          </Link>
        </Nav>

        {isAuthenticated && (
          <Nav className='d-md-none' navbar>
            <NavItem>
              <Button
                id='qsLoginBtn'
                color='primary'
                block
                onClick={() => loginWithRedirect({})}>
                Log in
              </Button>
            </NavItem>
          </Nav>
        )}
        {isAuthenticated && (
          <Nav
            className='d-md-none justify-content-between'
            navbar
            style={{ minHeight: 170 }}>
            <NavItem>
              <span className='user-info'>
                <img
                  src={user.picture}
                  alt='Profile'
                  className='nav-user-profile d-inline-block rounded-circle mr-3'
                  width='50'
                />
                <h6 className='d-inline-block'>{user.name}</h6>
              </span>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon='user' className='mr-3' />
              <RouterNavLink
                to='/profile'
                activeClassName='router-link-exact-active'>
                Profile
              </RouterNavLink>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon='power-off' className='mr-3' />
              <RouterNavLink
                to='#'
                id='qsLogoutBtn'
                onClick={() => logoutWithRedirect()}>
                Log out
              </RouterNavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
