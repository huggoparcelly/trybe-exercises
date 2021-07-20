import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <h1>Clientes</h1>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <> 
        <h1>Clientes</h1>
        {
          registers.map((client) => (
            <section>
              <p>Nome: {client.name}</p>
              <p>Idade: {client.age}</p>
              <p>Email: {client.email}</p>
            </section>
            ))
        }
        <Link to='/register'>Cadastrar novo cliente</Link>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer,
})

export default connect(mapStateToProps)(Register);