import React from 'react';
import { connect } from 'react-redux';
import { actionInfos } from '../redux/actions';

class Professional extends React.Component {
  render () {
    const { update } = this.props;
    return (
      <>
        <h3>Informações Profissional</h3>
        <form>
          <label htmlFor="curriculum">Resumo do Curriculo</label>
          <textarea 
            id="curriculum"
            placeholder="Informações relevantes"
            maxLength="1000"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="officer">Cargo</label>
          <input
            id="officer"
            type="text"
            placeholder="Cargo"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
          <label htmlFor="description">Descrição</label>
          <textarea 
            id="description"
            placeholder="Descrição do cargo"
            maxLength="500"
            onChange = {(e) => update(e.target.id, e.target.value)}
          />
        </form>

      </>
    )
  }
}

const mapDispatchToprops = (dispatch) => ({
  update: (type, value) => dispatch(actionInfos(type, value)),
});

export default connect(null, mapDispatchToprops)(Professional);
