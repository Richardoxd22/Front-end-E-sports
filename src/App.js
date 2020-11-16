import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Loading from './Componentes/Spinner/Spinner';
import NavBar from './components/NavBar';
import ExternalApi from './views/ExternalApi';
import Home from './views/Home';
import { useAuth0 } from '@auth0/auth0-react';
import history from './utils/history';

import Footer from './Componentes/Footer/Footer';
import Noticia from './Pages/HOCNoticias';
import MainPage from './Pages/MainPage';
// fontawesome
import initFontAwesome from './utils/initFontAwesome';
import PrivateRoute from './components/PrivateRoute';
import Profile from './views/Profile';
import Perfil from './Pages/HOCProfile';
import Evento from './Pages/Eventos';
import EventoDetalle from './Pages/EventosDetalle';
import DescripcionGlobal from './Componentes/DescripcionGlobal/DescripcionGlobal';
import CrearEvento from './Pages/HOCEvento';
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <NavBar />
      <DescripcionGlobal />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/noticia/:noticiaID' exact component={Noticia} />
        <Route path='/evento/:eventoID' exact component={EventoDetalle} />
        <Route path='/eventos' exact component={Evento} />
        <PrivateRoute
          path='/crearEvento'
          component={CrearEvento}></PrivateRoute>
        <PrivateRoute path='/perfil' component={Perfil}></PrivateRoute>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
