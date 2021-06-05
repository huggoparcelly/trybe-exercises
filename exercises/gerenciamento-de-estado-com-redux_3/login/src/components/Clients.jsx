import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRegister } from '../actions';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordened: false,
    };
  }

  generateRegister = (array) =>
    array.map((register) => (
        <div key={register.email}>
          <p>Nome: {register.name}</p>
          <p>Idade: {register.age}</p>
          <p>Email: {register.email}</p>
          <button onClick={() => this.props.delete(register)}>X</button>
        </div>
    ));

  orderRegisters = () => {
    const ordened = [...this.props.registers];
    ordened.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    return ordened;
  };


  render() {
    const { registers, userLogin } = this.props;
    const { ordened } = this.state;

    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <section>
          <h2>Nenhum registro encontrado</h2>
          <Link to="/register">Cadastrar novo!</Link>
          {' '}
          <Link to="/">Pagina Inicial</Link>
        </section>
      )
    return (
      <>
        <h2>Clientes Cadastrados</h2>
        <button
          type="button"
          onClick={() => this.setState(state => ({ ordened: !state.ordened }))}>
          Ordenar
        </button>

        <section>
          { this.generateRegister( ordened ? this.orderRegisters() : registers ) }
        </section>

        <section>
        <Link to="/register">Cadastrar novo</Link>
        {' '}
        <Link to="/">Pagina Inicial</Link>
        </section>
      </>
    );
  }
};

const mapStoreToProps = (state) => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  delete: (del) => dispatch(deleteRegister(del))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Clients);
