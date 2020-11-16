import React from 'react';
import Profile from '../Componentes/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const HOCProfile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Por favor, ingrese con sus credenciales...</div>;
  }
  return (
    <React.Fragment>
      <Profile usuario={user} />
    </React.Fragment>
  );
};

export default HOCProfile;
