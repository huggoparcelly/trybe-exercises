import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>Bem-vindo ao sistema, faça seu login</h2>
        <Link to="/login">LOGIN</Link>
      </>
    )
  }
};

export default Home;
