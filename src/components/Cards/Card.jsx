import React from 'react';
import './card.css';
import { useFech } from '../ListaPokemon/Pokemonlist';
import { Link } from 'react-router-dom';

function Card() {
  const data = useFech();
  let response
  if (!data || !Array.isArray(data)) {
     response = "<div>Cargando...</div>";
  }else{response = mapeoDePokemons(data)}


  return (
    <div >
      <ul className='container-card'>
        {response}
      </ul>
    </div>
  );
}

function mapeoDePokemons(data = []) {
  return data.map(function (pokemon) {
    return (
      <div className='card-container' key={pokemon.name}>
        <li className='card' key={pokemon.name}>
          <p className="poke-id">{pokemon.pokeId}</p>
          <img className='image' src={pokemon.imageUrl} alt={`Imagen de ${pokemon.name}`} />
          <div className="card-body">
            <p className="card-text">Name: {pokemon.name}</p>
            <p className="card-text">Type: {pokemon.types.join(', ')} </p>
            <button><Link to={`/detalles/:id`}>More Details</Link></button>
          </div>
        </li>
      </div>
    );

  });
}

export default Card;