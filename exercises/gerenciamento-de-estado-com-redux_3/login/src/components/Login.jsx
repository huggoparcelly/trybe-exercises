import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <>
        <h2>Cadastro</h2>
        <section>
          <input
            type="email"
            placeholder="Email"
            onChange={ (e) => this.setState({ email: e.target.value })}  
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={ (e) => this.setState({ password: e.target.value })}
          />
          <Link
            to="/clients"
            onClick={() => login({ email, password })}
          >
            Entrar
          </Link>
        </section>
        <Link to="/">VOLTAR</Link>
      </>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Login);
