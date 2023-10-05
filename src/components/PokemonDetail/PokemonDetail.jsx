import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFech } from '../ListaPokemon/Pokemonlist';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const data = useFech();

  useEffect(() => {
    if (Array.isArray(data)) {
      const selectedPokemon = data.find((p) => p.pokeId );
      if (selectedPokemon) {
        setPokemon(selectedPokemon);
      }
    }
  }, [id, data]);
  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Pokemon Details</h1>
      <div key={pokemon.pokeId}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.imageUrl} alt="" />
        <p>Type: {pokemon.types.join(', ')}</p>
        <p>Abilities: {pokemon.abilities.join(', ')}</p>
        <p>Stock: 10</p>
      </div>
    </div>
  );
}

export default PokemonDetails;
