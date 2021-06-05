import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <h2>Ops... Página não encontrada!</h2>
        <Link to="/">Página Inicial</Link>
      </>
    )
  }
};

export default NotFound;
