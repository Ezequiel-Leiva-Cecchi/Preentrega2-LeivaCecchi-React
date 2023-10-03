import React, { useState, useEffect } from 'react';

export function useFech() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        const result = await response.json();

        const pokemonData = await Promise.all(
          result.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonDetails = await pokemonResponse.json();
            const types = pokemonDetails.types.map((typeInfo) => typeInfo.type.name)
            const pokeId = pokemonDetails.id;
            console.log(pokemonDetails);
            return {
              name: pokemon.name,
              imageUrl: pokemonDetails.sprites.front_default,
              types: types, 
              pokeId: pokeId
            };
          })
        );

        setData(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  return data;
}