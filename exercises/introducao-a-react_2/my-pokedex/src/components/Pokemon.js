import React from 'react';
import PropTypes from 'prop-types';

// name, type, averageWeight.value + averageWeight.measurementUnit

class Pokemon extends React.Component {
  render () {
    const {name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemonInfos;
    return (
    <section className='card'>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name}></img>
        <p>Tipo: {type}</p> 
        <p>Peso: {value}{measurementUnit}</p>
      </div>
    </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  image: PropTypes.string,
  measurementUnit: PropTypes.string,
}

export default Pokemon;