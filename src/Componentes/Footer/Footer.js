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
                <Link to='/Noticias' style={{ color: 'black' }}>
                  Noticias
                </Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title'>Our Address</h5>
            <ul>
              <li className='list-unstyled'>La tola</li>
              <li className='list-unstyled'>
                <i className='whatsapp icon' />
                +592 233 89932
              </li>
              <li className='list-unstyled'>
                <i className='phone volume icon'></i>
                +592 343 39894
              </li>
              <li className='list-unstyled'>
                <i className='envelope icon'></i>
                pioli@gmail.com +592 343 39894
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='4'>
            <div>
              <a href='/' style={{ color: 'black' }}>
                <i className='facebook icon' style={{ fontSize: 40 }}></i>
              </a>
              <a href='/' style={{ color: 'black' }}>
                <i className='twitter icon' style={{ fontSize: 40 }}></i>
              </a>
              <a href='/' style={{ color: 'black' }}>
                <i className='youtube icon' style={{ fontSize: 40 }}></i>
              </a>
              <a href='/' style={{ color: 'black' }}>
                <i className='github icon' style={{ fontSize: 40 }}></i>
              </a>
              <a href='/' style={{ color: 'black' }}>
                <i className='google plus icon' style={{ fontSize: 40 }}></i>
              </a>
            </div>
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
