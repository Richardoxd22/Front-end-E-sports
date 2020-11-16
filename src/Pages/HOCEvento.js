import React from 'react';
import CrearEvento from './CrearEvento';
import { useAuth0 } from '@auth0/auth0-react';

const HOCNoticias = (props) => {
  const { user } = useAuth0();

  return (
    <React.Fragment>
      <CrearEvento usuario={user} />
    </React.Fragment>
  );
};

export default HOCNoticias;
