import Axios from 'axios';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  FormField,
  TextArea,
  Modal,
  Icon,
  Header,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Error from '../Componentes/Error/Error';
import Loader from '../Componentes/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class CrearEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      eventoIngresado: false,
      eventoIngresadoFail: false,
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
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await Axios.post(
        `https://e-sports1.herokuapp.com/api/eventos`,
        this.state.evento
      );
      this.setState({
        loading: false,
        error: null,
        eventoIngresado: true,
      });
    } catch (error) {
      this.setState({
        loading: false,

        eventoIngresadoFail: true,
      });
    }
  };

  modalOnCloseSubmit = () => {
    this.setState({
      eventoIngresado: false,
    });
  };

  modalOnCloseError = () => {
    this.setState({
      eventoIngresadoFail: false,
    });
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
              placeholder='Elegir una imagen y copiar el vinculo de imagen con extensión .jpg'
              name='eventoimagen'
              required
              onChange={this.onChange}
            />
          </Form.Field>
          <Button type='submit'>Ingresar</Button>
        </Form>
        {/*Modal para el ingreso exitoso*/}
        <Modal
          closeIcon
          open={this.state.eventoIngresado}
          size='small'
          style={{ height: 200 }}
          centered={true}>
          <Header
            icon='check circle'
            content='Evento ingresado satisfactoriamente!'
          />
          <Modal.Content>
            <p>
              Tu evento se ingresó correctamente, revisa la página de eventos.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.modalOnCloseSubmit}>
              <Icon name='smile outline' /> Ok!
            </Button>
          </Modal.Actions>
        </Modal>
        {/*Modal para el ingreso fallido */}
        <Modal
          closeIcon
          open={this.state.eventoIngresadoFail}
          size='small'
          style={{ height: 200 }}
          centered={true}>
          <Header
            icon='remove circle'
            content='Fallo en el ingreso del evento!'
          />
          <Modal.Content>
            <p>
              Tu evento no se pudo guardar, revisa los datos ingresados o
              contacta con el administrador.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={this.modalOnCloseError}>
              <Icon name='remove circle' /> Error!
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default withRouter(CrearEvento);
