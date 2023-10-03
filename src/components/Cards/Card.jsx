import React from 'react';
import './card.css';
import BotonAgregar from '../Boton/BotonAgregar '
import { useFech } from '../ListaPokemon/Pokemonlist';

function Card() {
  const data = useFech();

  if (!data || !Array.isArray(data)) {
    return <div>Cargando...</div>;
  }
  

  function mapeoDePokemons(data = []) {
    
    return data.map(function (pokemon) {
      return (
        <div className='card-container' key={pokemon.name}>
          <li className='card' key={pokemon.name}>
            <p className="poke-id">{pokemon.pokeId}</p>
            <img className='image' src={pokemon.imageUrl} alt={`Imagen de ${pokemon.name}`} />
            <div className="card-body">
              <p className="card-text">Nombre: {pokemon.name}</p>
              <p className="card-text">Tipos: {pokemon.types.join(', ')} </p>
              <BotonAgregar interior="Buy" />
            </div>
          </li>
        </div>
      );
     
    });
  }

  return (
    <div >
      <ul className='container-card'>
        {mapeoDePokemons(data)}
      </ul>
    </div>
  );
}

export default Card;