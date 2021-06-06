import React from 'react';
import { connect } from 'react-redux';

class Show extends React.Component {
  
  render () {
    const { personal, professional } = this.props;
    return (
      <>
        <h3>Resumo das informações</h3>
        <section>
          <p>Nome: {personal.name}</p>
          <p>Email: {personal.email}</p>
          <p>CPF: {personal.cpf}</p>
          <p>Endereço: {personal.address}</p>
          <p>Cidade: {personal.city}</p>
          <p>Estado: {personal.state}</p>
        </section>
        <section>
          <p>Resumo Curriculo: {professional.curriculum}</p>
          <p>Cargo: {professional.officer}</p>
          <p>Descrição: {professional.description}</p>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  personal: state.personalInfo,
  professional: state.professionalInfo,
});

export default connect(mapStateToProps)(Show);
