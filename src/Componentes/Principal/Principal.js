import React, { useEffect, useState } from 'react';
import {
  Card,
  Icon,
  Image,
  Container,
  Grid,
  GridColumn,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { MainCard } from './EstilosPrincipal';

const Principal = ({ noticiasOrdenadas }) => {
  return (
    <div style={{ padding: '4em 0em 4em 6%' }}>
      <Grid divided>
        {noticiasOrdenadas.map((noticia) => (
          <Link to={`/noticia/${noticia.id_noticia}`} key={noticia.id_noticia}>
            <Card style={{ margin: '1em' }}>
              <Image src={noticia.imagen} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{noticia.titulonoticia}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Principal;
