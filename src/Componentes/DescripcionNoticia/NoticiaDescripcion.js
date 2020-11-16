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

const NoticiaDescripcion = ({ noticia }) => {
  return (
    <div style={{ padding: '0 0 0 5em' }}>
      <Container
        style={{
          padding: '5em 0em 5em 0em',
        }}>
        <Header>{noticia.titulonoticia}</Header>
        <Header>Juego: {noticia.juego}</Header>
        <Image
          src={noticia.imagen}
          size='big'
          style={{ marginBottom: '1em' }}
        />
        <ItemExtra>Fecha: {noticia.noticiafecha}</ItemExtra>
        <ItemDescription>{noticia.informacion}</ItemDescription>
      </Container>
    </div>
  );
};

export default NoticiaDescripcion;
