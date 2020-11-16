import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Item,
  Header,
  ItemDescription,
  Image,
  List,
  Card,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Recomendaciones = ({ recomendaciones }) => {
  return (
    <div>
      <List style={{ padding: '2em' }}>
        <Header>Recomendaciones:</Header>
        <List.Item>
          {recomendaciones.map((recomendacion) => (
            <a
              key={recomendacion.id_noticia}
              href={`/noticia/${recomendacion.id_noticia}`}>
              <Card style={{ marginTop: '1em' }}>
                <Image src={recomendacion.imagen} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{recomendacion.titulonoticia}</Card.Header>
                </Card.Content>
              </Card>
            </a>
          ))}
        </List.Item>
      </List>
    </div>
  );
};

export default Recomendaciones;
