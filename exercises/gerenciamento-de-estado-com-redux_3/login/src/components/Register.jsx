import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRegister } from '../actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <>
        <h2>Cadastrar</h2>
        <section>
          <input
            type="text"
            placeholder="Nome"
            value={ name }
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={ age }
            onChange={ (e)=> this.setState({ age: e.target.value })}  
          />
          <input
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ (e)=> this.setState({ email: e.target.value })}
          />
        </section>
        <button onClick={ this.validateRegister }>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
        <Link to="/">Página Inicial</Link>
      </>
    )
  }
};

const mapDispatchToPros = (dispatch) => ({
  addRegister: (user) => dispatch(addRegister(user))
});

const mapStoreToProps = (state) => ({
  userLogin: state.loginReducer
});

export default connect(mapStoreToProps, mapDispatchToPros)(Register);
