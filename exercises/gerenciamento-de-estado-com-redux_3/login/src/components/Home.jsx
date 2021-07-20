import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Bem vindo ao sistema</h1>
        <Link to='/login'>Efetuar Login!</Link>
      </>
    );
  }
};

export default Home;