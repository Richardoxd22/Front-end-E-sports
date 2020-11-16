import React, { useState, useEffect, Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Pagination, Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';
import Loader from '../Componentes/Spinner/Spinner';
import EventoDescripcion from '../Componentes/DescripcionEvento/DescripcionEvento';
import Recomendaciones from '../Componentes/Recomendaciones/Recomendaciones';

import Error from '../Componentes/Error/Error';

class EventosDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      evento: {
        tituloevento: '',
        juegotorneo: '',
        informaciontorneo: '',
        discord: '',
        id_eventos: '',
        auth: '',
        eventofecha: '',
        eventoimagen: '',
      },
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const { data: evento } = await axios.get(
        `https://e-sportsbackend.herokuapp.com/api/eventos/${this.props.match.params.eventoID}`
      );

      const { data: recomendaciones } = await axios.get(
        `https://e-sportsbackend.herokuapp.com/api/customqueries/recomendaciones`
      );

      this.setState({
        evento: evento,
        recomendaciones: recomendaciones,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  splituser = (usuario) => {
    let variable = usuario.split('|');
    return variable[1];
  };

  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <Error />;
    return (
      <div>
        <Grid>
          <Grid.Column width={10} floated='left'>
            <EventoDescripcion
              evento={this.state.evento}
              recomendaciones={this.state.recomendaciones}
            />
            <hr />
          </Grid.Column>
          <Grid.Column width={5} floated='right'>
            <Recomendaciones
              recomendaciones={this.state.recomendaciones.results}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventosDetalle;
