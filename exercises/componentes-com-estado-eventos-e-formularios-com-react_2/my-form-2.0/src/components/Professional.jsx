import React from 'react';

class Professional extends React.Component {
  render () {
    return (
      <>
        <h3>Informações Profissional</h3>
        <form>
          <label htmlFor="curriculum">Resumo do Curriculo</label>
          <textarea 
            id="curriculum"
            placeholder="Informações relevantes"
            maxLength="1000"
          />
          <label htmlFor="officer">Cargo</label>
          <input
            id="officer"
            type="text"
            placeholder="Cargo"
          />
          <label htmlFor="description">Descrição</label>
          <textarea 
            id="description"
            placeholder="Descrição do cargo"
            maxLength="500"
          />
        </form>
        
      </>
    )
  }
}

export default Professional;
