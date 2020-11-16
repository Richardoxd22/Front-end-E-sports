import React, { useState, useEffect, Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Pagination, Grid, GridColumn } from 'semantic-ui-react';
import axios from 'axios';
import Loader from '../Componentes/Spinner/Spinner';
import NoticiaDescripcion from '../Componentes/DescripcionNoticia/NoticiaDescripcion';
import Recomendaciones from '../Componentes/Recomendaciones/Recomendaciones';
import Feed from '../Componentes/Comentarios/Comentarios';
import FormComentario from '../Componentes/FormComentario/FormComentario';
import Error from '../Componentes/Error/Error';

class Noticias extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      error: null,
      loading: true,
      comentario: {
        auth: '',
        id_noticia: '',
        fecha:
          date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
        comentario: '',
      },
      noticia: {
        titulonoticia: '',
        juego: '',
        informacion: '',
        id_noticia: '',
        id: '',
        imagen: '',
        noticiafecha: '',
      },
      recomendaciones: {
        titulonoticia: '',
        juego: '',
        informacion: '',
        id_noticia: '',
        id: '',
        imagen: '',
        noticiafecha: '',
      },
      comentarios: {
        comentario: '',
        fecha: '',
        rating: '',
        nombre: '',
        id_comentarios: '',
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
      const { data: noticia } = await axios.get(
        `https://e-sportsbackend.herokuapp.com/api/noticias/${this.props.URLParams}`
      );

      const { data: recomendaciones } = await axios.get(
        `https://e-sportsbackend.herokuapp.com/api/customqueries/recomendaciones`
      );

      const { data: comentarios } = await axios.get(
        `https://e-sportsbackend.herokuapp.com/api/customqueries/comentarios/${this.props.URLParams}`
      );
      this.setState({
        noticia: noticia,
        recomendaciones: recomendaciones,
        comentarios: comentarios,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      console.log(error);
    }
  };
  splituser = (usuario) => {
    let variable = usuario.split('|');
    return variable[1];
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await axios.post(
        'https://e-sportsbackend.herokuapp.com/api/comentarios',
        this.state.comentario
      );
      this.setState({
        loading: false,
        error: null,
      });
      window.location.reload();
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  handleChange = (e) => {
    const date = new Date();
    this.setState({
      comentario: {
        auth: this.splituser(this.props.usuario.sub),
        id_noticia: this.props.URLParams,
        fecha:
          date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
        comentario: e.target.value,
      },
    });
  };

  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <Error />;
    return (
      <div>
        <Grid>
          <Grid.Column width={10} floated='left'>
            <NoticiaDescripcion
              noticia={this.state.noticia}
              recomendaciones={this.state.recomendaciones}
            />
            <hr />
            <FormComentario
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <Feed comentarios={this.state.comentarios} />
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

export default Noticias;
