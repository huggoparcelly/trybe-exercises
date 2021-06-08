import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction } from '../redux/actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  };

  validadeRegiister = () => {
    const {name, age, email} = this.state;
    this.props.registerClient({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { registerClient } = this.props;
    const { name, age, email } = this.state;
    return (
      <> 
        <h1>Clientes registrados</h1>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Idade"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <button
          type="submit"
          onClick={ this.validadeRegiister }
        >
          Cadastrar
        </button>
        <Link
          to='/clients'
        >
          Verificar clientes cadastrados
        </Link>
      </>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  registerClient: (value) => dispatch(registerAction(value))
});

export default connect(null, mapDispatchToProps)(Register);