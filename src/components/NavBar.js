import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EstiloNavbar } from '../Componentes/NavBar/EstilosNavBar';
import Icono from '../assets/logo1.jpg';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Image } from 'react-bootstrap';

import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className='nav-container'>
      <Navbar variant='dark' expand='lg' style={EstiloNavbar}>
        <Container>
          <NavbarBrand href='/'>
            <Image src={Icono} width={70} height={60}></Image>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink
                  style={{ color: 'white' }}
                  tag={RouterNavLink}
                  to='/'
                  exact
                  activeClassName='router-link-exact-active'>
                  <i className='home icon'></i>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: 'white' }}
                  tag={RouterNavLink}
                  to='/eventos'
                  exact
                  activeClassName='router-link-exact-active'>
                  <i className='gamepad icon'></i> Eventos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: 'white' }}
                  tag={RouterNavLink}
                  to='/crearEvento'
                  exact
                  activeClassName='router-link-exact-active'>
                  <i className='discord icon'></i> Crear Evento
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: 'white' }}
                  tag={RouterNavLink}
                  to='/perfil'
                  exact
                  activeClassName='router-link-exact-active'>
                  <i className='user icon'></i> Perfil
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className='d-none d-md-block' navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id='qsLoginBtn'
                    color='primary'
                    className='btn-margin'
                    onClick={() => loginWithRedirect()}>
                    Iniciar Sesión
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id='profileDropDown'>
                    <img
                      src={user.picture}
                      alt='Profile'
                      className='nav-user-profile rounded-circle'
                      width='50'
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to='/perfil'
                      className='dropdown-profile'
                      activeClassName='router-link-exact-active'>
                      <FontAwesomeIcon icon='user' className='mr-3' /> Perfil
                    </DropdownItem>
                    <DropdownItem
                      id='qsLogoutBtn'
                      onClick={() => logoutWithRedirect()}>
                      <FontAwesomeIcon icon='power-off' className='mr-3' />{' '}
                      Cerrar Sesión
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className='d-md-none' navbar>
                <NavItem>
                  <Button
                    id='qsLoginBtn'
                    color='primary'
                    block
                    onClick={() => loginWithRedirect({})}>
                    Iniciar Sesión
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
                    Perfil
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon='power-off' className='mr-3' />
                  <RouterNavLink
                    to='/'
                    id='qsLogoutBtn'
                    onClick={() => logoutWithRedirect()}>
                    Cerrar Sesión
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
