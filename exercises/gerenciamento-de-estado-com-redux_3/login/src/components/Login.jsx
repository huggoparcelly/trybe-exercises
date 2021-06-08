import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  };

  render() {
    const { login } = this.props;
    const { email, password } = this.state;
    return (
      <> 
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => (this.setState({email: e.target.value}))}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => (this.setState({password: e.target.value}))}
        />
        <Link to='/clients' onClick={ () => login({ email, password }) }>Entrar</Link>
      </>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginAction(email, password))
})

export default connect(null, mapDispatchToProps)(Login);