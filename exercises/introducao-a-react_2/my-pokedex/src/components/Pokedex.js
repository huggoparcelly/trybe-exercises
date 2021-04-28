import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    return (
      <section>
        <h1 className='title'>POKEDEX</h1>
        <main className='mainContainer'>
          {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemonInfos={pokemon} />)}
        </main>
      </section>
    )
  }
};

Pokedex.propTypes = {
  pokemon: PropTypes.object
}

export default Pokedex;