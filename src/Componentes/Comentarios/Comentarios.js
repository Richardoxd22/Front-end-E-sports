import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Feed } from 'semantic-ui-react';

const Comentarios = ({ comentarios }) => {
  return (
    <div style={{ padding: '0 0 0 5em' }}>
      <Feed>
        {comentarios.map((comentario) => (
          <Feed.Event
            key={comentario.id_comentarios}
            image={comentario.picture}
            date={comentario.fecha}
            summary={comentario.nickname}
            extraText={comentario.comentario}
          />
        ))}
      </Feed>
    </div>
  );
};

export default Comentarios;
