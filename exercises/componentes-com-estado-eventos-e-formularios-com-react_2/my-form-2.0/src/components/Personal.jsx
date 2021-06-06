import React from 'react';
import { connect } from 'react-redux';
import { actionInfos } from '../redux/actions';

class Personal extends React.Component {

  render () {
    const { update } = this.props;
    return (
      <>
        <h3>Informações Pessoais</h3>
        <form>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="cpf">CPF</label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            type="text"
            placeholder="Endereço"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            placeholder="Cidade"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="state">Estado</label>
          <input
            id="state"
            type="text"
            placeholder="Estado"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
        </form>
      </>
    )
  }
}

const mapDispatchToprops = (dispatch) => ({
  update: (type, value) => dispatch(actionInfos(type, value))
})

export default connect(null, mapDispatchToprops)(Personal);
