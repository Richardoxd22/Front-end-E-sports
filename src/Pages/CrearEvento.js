import Axios from 'axios';
import React, { Component } from 'react';
import { Button, Checkbox, Form, FormField, TextArea } from 'semantic-ui-react';
import Error from '../Componentes/Error/Error';
import Loader from '../Componentes/Spinner/Spinner';
class CrearEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      evento: {
        tituloevento: '',
        juegotorneo: '',
        informaciontorneo: '',
        discord: '',
        auth: '',
        eventofecha: '',
        eventoimagen: '',
      },
    };
  }
  splituser = (usuario) => {
    let variable = usuario.split('|');
    return variable[1];
  };
  onChange = (e) => {
    this.setState({
      evento: {
        ...this.state.evento,
        auth: this.splituser(this.props.usuario.sub),
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = Axios.post(
        `https://e-sports1.herokuapp.com/api/eventos`,
        this.state.evento
      );
      this.setState({
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) return <Loader />;
    if (this.state.error) return <Error />;
    return (
      <div style={{ padding: '3em 10em 3em 10em' }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Titulo del Evento:</label>
            <input
              placeholder='Titulo del evento'
              name='tituloevento'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Juego del Torneo</label>
            <input
              placeholder='Juego del torneo'
              name='juegotorneo'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <FormField>
            <label>Información del torneo:</label>
            <br />
            <TextArea
              placeholder='Informacion del torneo'
              required
              name='informaciontorneo'
              onChange={this.onChange}
            />
          </FormField>
          <Form.Field>
            <label>Discord del Torneo</label>
            <input
              placeholder='discord del Torneo'
              name='discord'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Fecha del Torneo</label>
            <input
              placeholder='Fecha del Torneo'
              name='eventofecha'
              type='date'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Imagen del Torneo</label>
            <input
              placeholder='Imagen del Torneo'
              name='eventoimagen'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CrearEvento;
