import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Principal from '../Componentes/EventosPrincipal/Eventos';
import 'semantic-ui-css/semantic.min.css';
import { Container, Pagination, Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../Componentes/Spinner/Spinner';
import Error from '../Componentes/Error/Error';

const Eventos = ({ noticiasOrdenadas }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [paginaActual, setpaginaActual] = useState(1);
  const [paginasTotales, setpaginasTotales] = useState(0);
  const [eventos, seteventos] = useState(undefined);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetchData(paginaActual);
  }, []);

  const fetchData = async (pagina) => {
    setloading(true);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/customqueries/eventos?page=${pagina}`
      );
      seteventos(data.results);
      setpaginasTotales(data.info.pages);
      setloading(false);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const splituser = (usuario) => {
    let variable = usuario.split('|');
    return variable[1];
  };

  const handlePaginationChange = (e, { activePage }) => {
    setpaginaActual(activePage);
    fetchData(activePage);
  };
  if (error) return <Error />;
  if (eventos) {
    return (
      <div>
        <Principal eventosOrdenados={eventos} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '5em',
          }}>
          <Pagination
            activePage={paginaActual}
            onPageChange={handlePaginationChange}
            totalPages={paginasTotales}
            style={{ marginLeft: '' }}
          />
        </div>
      </div>
    );
  }

  return <Loader></Loader>;
};

export default Eventos;
