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

const Principal = ({ eventosOrdenados }) => {
  return (
    <div style={{ padding: '4em 0em 4em 6%' }}>
      <Grid divided>
        {eventosOrdenados.map((evento) => (
          <Link to={`/evento/${evento.id_eventos}`} key={evento.id_eventos}>
            <Card style={{ margin: '1em' }}>
              <Image src={evento.eventoimagen} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{evento.tituloevento}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Principal;
