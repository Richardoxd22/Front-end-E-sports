import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Principal from '../Componentes/Principal/Principal';
import 'semantic-ui-css/semantic.min.css';
import { Container, Pagination, Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../Componentes/Spinner/Spinner';
import Error from '../Componentes/Error/Error';

const MainPage = ({ noticiasOrdenadas }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [paginaActual, setpaginaActual] = useState(1);
  const [paginasTotales, setpaginasTotales] = useState(0);
  const [noticias, setnoticias] = useState(undefined);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetchData(paginaActual);
    saveuser();
  }, []);

  const fetchData = async (pagina) => {
    setloading(true);
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/customqueries/noticias?page=${pagina}`
      );
      setnoticias(data.results);
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
  const saveuser = async () => {
    if (user) {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/usuarios/${splituser(user.sub)}`
        );
        if (data === null) {
          try {
            const response = await axios.post(
              'http://127.0.0.1:8000/api/usuarios',
              {
                auth: splituser(user.sub),
                nickname: user.nickname,
                name: user.name,
                picture: user.picture,
                email: user.email,
              }
            );
          } catch (error) {
            console.log(error);
            seterror(error);
          }
        } else {
          console.log('si hay el usuario');
        }
      } catch (error) {
        seterror(error);
      }
    }
  };

  const handlePaginationChange = (e, { activePage }) => {
    setpaginaActual(activePage);
    fetchData(activePage);
  };
  if (error) return <Error />;
  if (noticias) {
    return (
      <div>
        <Principal noticiasOrdenadas={noticias} />
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

export default MainPage;
