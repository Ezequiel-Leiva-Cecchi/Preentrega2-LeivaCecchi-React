import React, { useState } from 'react';
import './pokemonCount.css';

function PokemonCount() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(15.000); // Precio por unidad
  const [stock, setStock] = useState(10); // Stock disponible
  const [message, setMessage] = useState(''); // Mensaje de stock agotado

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setMessage('¡Stock agotado!');
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    }
  };

  const calculateTotal = () => {
    return count * price;
  };

  return (
    <div>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount} disabled={count >= stock}>
          +
        </button>
      </div>
      <p>Precio por unidad: ${price}</p>
      <p>Total: ${calculateTotal()}</p>
      <p>Stock disponible: {stock}</p>
      <p className="stock-message">{message}</p>
      <button disabled={count === 0}>Comprar</button>
    </div>
  );
}

export default PokemonCount;
