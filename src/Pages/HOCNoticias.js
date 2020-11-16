import React from 'react';
import Noticia from './Noticias';
import { useAuth0 } from '@auth0/auth0-react';

const HOCNoticias = (props) => {
  const { user } = useAuth0();
  let URLParam = props.match.params.noticiaID;

  return (
    <React.Fragment>
      <Noticia usuario={user} URLParams={URLParam} />
    </React.Fragment>
  );
};

export default HOCNoticias;
