import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Footer = () => {
  return (
    <MDBFooter
      style={{ background: '#D1C4E9', color: 'black' }}
      className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='3'>
            <h5 className='title'>Links</h5>
            <ul>
              <li className='list-unstyled'>
                <Link to='/' style={{ color: 'black' }}>
                  Home
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/eventos' style={{ color: 'black' }}>
                  Eventos
                </Link>
              </li>
              <li className='list-unstyled'>
                <Link to='/' style={{ color: 'black' }}>
                  Noticias
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Contactos</h5>
            <ul>
              <li className='list-unstyled'>La Tola</li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 979098791 Christian Chavez
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 988147777 Fredy Maldonado
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 998610707 Marcelo Ruilova
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon'></i>
                +593 984004786 Richard Santillán
              </li>
              <li className='list-unstyled'>
                <i className='envelope icon'></i>
                  richard29san97@outlook.com 
              </li>
              <li className='list-unstyled'>
                <i className='envelope icon'></i>
                  christian.cha45@gmail.com 
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <div>
              <h5 className='title'>Accesos Directos</h5>
              <a  rel='noopener noreferrer'
                  target='_blank' href='https://www.facebook.com/' style={{ color: 'black' }}>
                <i className='facebook icon' style={{ fontSize: 40 }}></i>
              </a>
              <a  rel='noopener noreferrer'
                  target='_blank' href='http://www.twitter.com/' style={{ color: 'black' }}>
                <i className='twitter icon' style={{ fontSize: 40 }}></i>
              </a>
              <a  rel='noopener noreferrer'
                  target='_blank' href='https://www.youtube.com/' style={{ color: 'black' }}>
                <i className='youtube icon' style={{ fontSize: 40 }}></i>
              </a>
              <a  rel='noopener noreferrer'
                  target='_blank' href='http://www.github.com/' style={{ color: 'black' }}>
                <i className='github icon' style={{ fontSize: 40 }}></i>
              </a>
              <a  rel='noopener noreferrer'
                  target='_blank' href='' style={{ color: 'black' }}>
                <i className='google plus icon' style={{ fontSize: 40 }}></i>
              </a>              
            </div>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Todo en Eventos</h5>
            <ul>
              <li className='list-unstyled'>Contactarse a:</li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 979098791 Christian Chavez
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 988147777 Fredy Maldonado
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +593 998610707 Marcelo Ruilova
              </li>
              <li className='list-unstyled'>
                <i className='whatsapp icon'></i>
                +593 984004786 Richard Santillán
              </li>
              <li className='list-unstyled'>
                <i className='envelope icon'></i>
                  richard29san97@outlook.com 
              </li>
              <li className='list-unstyled'>
                <i className='envelope icon'></i>
                  christian.cha45@gmail.com 
              </li>
            </ul>
          </MDBCol>          
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.mdbootstrap.com'> Reactivos </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
