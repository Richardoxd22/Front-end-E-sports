import React from 'react';
import { Form, FormField, Segment, Button, TextArea } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const FormComentario = ({ handleSubmit, handleChange }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ padding: '3em' }}>
      {isAuthenticated && (
        <Segment>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <label>{user.nickname}:</label>
              <br />
              <TextArea
                placeholder='Ingrese su comentario'
                onChange={handleChange}
                required
              />
            </FormField>
            <Button type='submit' color='blue'>
              Enviar
            </Button>
          </Form>
        </Segment>
      )}
      {!isAuthenticated && (
        <Button
          id='qsLoginBtn'
          color='blue'
          className='btn-margin'
          onClick={() => loginWithRedirect()}>
          Ingresa un comentario
        </Button>
      )}
    </div>
  );
};

export default FormComentario;
