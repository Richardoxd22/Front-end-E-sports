import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Pagination,
  Grid,
  GridColumn,
  Item,
  Header,
  ItemDescription,
  ItemExtra,
  Image,
} from 'semantic-ui-react';

const NoticiaDescripcion = ({ evento }) => {
  return (
    <div style={{ padding: '0 0 0 5em' }}>
      <Container
        style={{
          padding: '5em 0em 5em 0em',
        }}>
        <Header>{evento.tituloevento}</Header>
        <Header>Juego del Torneo: {evento.juegotorneo}</Header>
        <Header>
          Discord: <a href={evento.discord}>{evento.tituloevento}</a>
        </Header>
        <Image
          src={evento.eventoimagen}
          size='big'
          style={{ marginBottom: '1em' }}
        />
        <ItemExtra>Fecha: {evento.eventofecha}</ItemExtra>
        <ItemDescription>{evento.informaciontorneo}</ItemDescription>
      </Container>
    </div>
  );
};

export default NoticiaDescripcion;
